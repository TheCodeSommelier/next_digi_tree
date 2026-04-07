"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";

import { orderService } from "@/app/actions/email";

import Button from "../buttons/Button";
import SelectInput from "../inputs/SelectInput";
import TextInput from "../inputs/TextInput";
import { initialServiceOrderState } from "@/app/actions/consts";

type Props = {
  options: string[];
  courseTitle: string;
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Odesílám..." : "Chci služby"}
    </Button>
  );
};

const ServiceForm = ({ options, courseTitle }: Props) => {
  const [state, setState] = useState(initialServiceOrderState);
  const [formKey, setFormKey] = useState(0);

  const handleSubmit = async (formData: FormData) => {
    const nextState = await orderService(formData);

    setState(nextState);

    if (nextState.status === "success") {
      setFormKey((current) => current + 1);
    }
  };

  if (state.status === "success") {
    return (
      <div className="space-y-4 rounded-3xl border border-gray-20 bg-white/80 p-6 text-primary shadow-sm shadow-primary/10">
        <p className="text-xl font-semibold">Poptávka odeslána</p>
        <p>{state.message}</p>
        <Button onClick={() => setState(initialServiceOrderState)}>
          Chci poslat další poptávku
        </Button>
      </div>
    );
  }

  return (
    <form key={formKey} action={handleSubmit} className="flex flex-col gap-5">
      <input type="hidden" name="courseTitle" value={courseTitle} />

      <TextInput label="Jméno" name="fullName" required />
      <TextInput label="Společnost" name="company" required />
      <TextInput label="IČO" name="ico" />
      <TextInput label="Email" name="email" type="email" required />

      <SelectInput
        name="services"
        id="services-id"
        label="Služby"
        options={options}
        multiple
      />

      <TextInput label="Zpráva" name="message" isTextArea autoResize required />

      {state.status === "error" && (
        <div className="space-y-2 text-sm text-error">
          <p>{state.message}</p>
          {!!state.errors?.length && (
            <ul className="list-disc pl-5">
              {state.errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      <SubmitButton />
    </form>
  );
};

export default ServiceForm;
