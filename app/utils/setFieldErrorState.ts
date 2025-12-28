// Utility helper to toggle error styling on an input/label pair by id.
export const setFieldErrorState = (form: HTMLFormElement, id: string, hasError: boolean) => {
  const input = form.querySelector<HTMLElement>(`#${id}`);
  const label = form.querySelector<HTMLElement>(`label[for="${id}"]`);
  if (!input) return;
  input.dataset.error = hasError ? 'true' : 'false';
  if (label) label.dataset.error = hasError ? 'true' : 'false';
};
