export type UserWithFeatures = {
  name: string;
  description?: string;
  features?: string[];
};

export const DummyApi = {
  checkName: async ({ name }: { name: string }): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const valErr = validateUsername(name);
        if (valErr) {
          reject(valErr);
        }
        resolve();
      }, 2000);
    });
  },

  submit: async (user: UserWithFeatures): Promise<UserWithFeatures> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const valErr = validateUsername(user.name);
        if (valErr) {
          reject(valErr);
        }
        resolve(user);
      }, 2000);
    });
  },
};

const validateUsername = (name: string): string | null => {
  if (name === "takenname") {
    return "Name is already taken";
  }
  if (!name) {
    return "Name is required";
  }
  if (name.length > 20) {
    return "Name is too long";
  }

  return null;
};
