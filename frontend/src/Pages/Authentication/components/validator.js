const validator = {
  email: (email) => {
    if (!email.includes('@')) {
      return 'Email must include @';
    }

    const [localPart, domain] = email.split('@');
    if (localPart.length === 0 || domain.length < 3) {
      return 'Invalid email format';
    }

    const domainExtension = domain.split('.');

    if (domainExtension.length < 2 || domainExtension[1] < 2) {
      return 'Invalid email format';
    }

    return true;
  },

  username: (username) => {
    if (username.length < 3 || username.length > 20) {
      return 'Username must be between 3 and 20 characters';
    }

    const validCharacters = /^[a-zA-Z0-9_]+$/;

    if (!validCharacters.test(username)) {
      return 'Username can only contain letters, numbers and underscores';
    }

    return true;
  },

  full_name: (full_name) => {
    if (full_name.length > 30) {
      return 'Full Name is too long';
    }

    const validCharacters = /^[A-Za-z\s'-]+$/;

    if (!validCharacters.test(full_name)) {
      return 'Full Name contains invalid characters';
    }

    return true;
  },

  password: (password) => {
    if (password.length < 8) {
      return 'Password must include at least 8 characters';
    }

    const hasUpperCase = password.split('').some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

    if (!hasUpperCase) {
      return 'Password must include at least 1 capital letter';
    }

    const hasLowerCase = password.split('').some((char) => char === char.toLowerCase() && char !== char.toUpperCase());

    if (!hasLowerCase) {
      return 'Password must include at least 1 small letter';
    }

    const hasDigit = password.split('').some((char) => !isNaN(parseInt(char, 10)));

    if (!hasDigit) {
      return 'Password must include at least 1 digit';
    }

    return true;
  },
};

module.exports = validator;
