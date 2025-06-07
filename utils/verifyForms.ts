export interface FormDataPayload {
  full_name: string;
  cpf: string;
  email: string;
  password1: string;
  password2: string;
}

export interface FormDataPayloadRegisterCompany {
  legal_name: string;
  commercial_name: string;
  email: string;
  password1: string;
  password2: string;
  cnpj: string;
}

export interface FormDataPayloadLogin {
  email: string;
  password: string;
}

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

function isValidCNPJ(cnpj: string): boolean {
  cnpj = cnpj.replace(/[^\d]+/g, "");

  if (cnpj.length !== 14) return false;

  // Elimina CNPJs conhecidos inválidos
  if (/^(\d)\1{13}$/.test(cnpj)) return false;

  const calcDigit = (base: string, weights: number[]): number => {
    let sum = 0;
    for (let i = 0; i < weights.length; i++) {
      sum += parseInt(base.charAt(i), 10) * weights[i];
    }
    const mod = sum % 11;
    return mod < 2 ? 0 : 11 - mod;
  };

  const base = cnpj.slice(0, 12);
  const digit1 = calcDigit(base, [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
  const digit2 = calcDigit(
    base + digit1,
    [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
  );

  return cnpj.endsWith(digit1.toString() + digit2.toString());
}

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

type FormErrorsLogin = Partial<Record<keyof FormDataPayloadLogin, string>>;

export function validationFormDataLogin(
  data: FormDataPayloadLogin
): FormErrorsLogin {
  const errors: FormErrors = {};

  if (!data.email) {
    errors.email = "E-mail é obrigatório.";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "E-mail inválido.";
  }

  if (!data.password) {
    errors.password1 = "Senha é obrigatória.";
  }

  return errors;
}

type FormErrorsRegisterCompany = Partial<
  Record<keyof FormDataPayloadRegisterCompany, string>
>;

export function validationFormDataRegisterCompany(
  data: FormDataPayloadRegisterCompany
): FormErrorsRegisterCompany {
  const errors: FormErrorsRegisterCompany = {};

  if (!data.commercial_name || !data.commercial_name.trim()) {
    errors.commercial_name = "Nome comercial é obrigatório.";
  }

  if (!data.legal_name || !data.legal_name.trim()) {
    errors.legal_name = "Razão social é obrigatória.";
  }

  if (!data.cnpj) {
    errors.cnpj = "CNPJ é obrigatório.";
  } else if (!isValidCNPJ(data.cnpj)) {
    errors.cnpj = "CNPJ inválido.";
  }

  if (!data.email) {
    errors.email = "E-mail é obrigatório.";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "E-mail inválido.";
  }

  if (!data.password1) {
    errors.password1 = "Senha é obrigatória.";
  } else if (data.password1.length < 6) {
    errors.password1 = "Senha deve ter no mínimo 6 caracteres.";
  }

  if (data.password2 !== data.password1) {
    errors.password2 = "As senhas não coincidem.";
  }

  return errors;
}
