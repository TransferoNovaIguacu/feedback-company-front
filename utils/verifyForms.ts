export function isValidCPF(cpf: string) {
  cpf = cpf.replace(/[^\d]+/g, ""); // só números
  if (cpf.length !== 11) return false;
  if (/^(\d)\1+$/.test(cpf)) return false; // todos iguais não valem

  let sum = 0;
  let rest;

  for (let i = 1; i <= 9; i++)
    sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);

  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(cpf.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++)
    sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);

  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(cpf.substring(10, 11))) return false;

  return true;
}

export interface FormDataPayload {
  full_name: string;
  cpf: string;
  email: string;
  password1: string;
  password2: string;
};

type FormErrors = Partial<Record<keyof FormDataPayload, string>>;

export function validateFormData(data: FormDataPayload): FormErrors {
  const errors: FormErrors = {};

  if (!data.full_name) {
    errors.full_name = "Nome é obrigatório.";
  }

  if (!data.cpf) {
    errors.cpf = "CPF é obrigatório.";
  } else if (!isValidCPF(data.cpf)) {
    errors.cpf = "CPF inválido.";
  }

  if (!data.email) {
    errors.email = "E-mail é obrigatório.";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "E-mail inválido.";
  }

  if (!data.password1) {
    errors.password1 = "Senha é obrigatória.";
  } else if (data.password1.length < 8) {
    errors.password1 = "Senha deve ter no mínimo 8 caracteres.";
  }

  if (data.password2 !== data.password1) {
    errors.password2 = "As senhas não coincidem.";
  }

  return errors;
}