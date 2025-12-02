const users = [
  {
    email: "superetro85@gmail.com",
    password: "Shoko1010!",
    userId: "171007",
  },
];

const validateCredentials = (email, password) => {
  return new Promise((resolve, reject) => {
    if (!email || !email.includes("@")) {
      reject(new Error("Invalid email format"));
    }
    if (!password || password.length <= 5) {
      reject(new Error("Password must be more than 5 characters"));
    }
    resolve({ email, isValid: true });
  });
};

const checkUserExists = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.email === email);
      if (user) {
        resolve({ userId: user.userId, email: user.email });
      } else {
        reject(new Error("User not found"));
      }
    }, 500);
  });
};

const verifyPassword = (userId, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.userId === userId);
      if (!user) {
        reject(new Error("User not found"));
      } else if (user.password !== password) {
        reject(new Error("Incorrect password"));
      } else {
        resolve({ token: "jwt_token_here" });
      }
    }, 300);
  });
};

const loginUser = async (email, password) => {
  try {
    console.log("Step 1: Validating credentials...");
    await validateCredentials(email, password);
    
    console.log("Step 2: Checking if user exists...");
    const userData = await checkUserExists(email);
    
    console.log("Step 3: Verifying password...");
    const token = await verifyPassword(userData.userId, password);
    
    console.log("✅ Login successful!");
    return token;
    
  } catch (error) {
    console.error("❌ Login failed:", error.message);
    throw error; // Re-throw para quem chamar a função
  }
};

async function runTests() {
  console.log("\n=== Test 1: Credentials válidas ===");
  try {
    const result = await loginUser("superetro85@gmail.com", "Shoko1010!");
    console.log("Token:", result);
  } catch (error) {
    console.log("Falhou como esperado:", error.message);
  }

  console.log("\n=== Test 2: Email inválido ===");
  try {
    await loginUser("invalid-email", "Shoko1010!");
  } catch (error) {
    console.log("Falhou como esperado:", error.message);
  }

  console.log("\n=== Test 3: Usuário não existe ===");
  try {
    await loginUser("notfound@test.com", "Shoko1010!");
  } catch (error) {
    console.log("Falhou como esperado:", error.message);
  }

  console.log("\n=== Test 4: Senha incorreta ===");
  try {
    await loginUser("superetro85@gmail.com", "wrongpassword");
  } catch (error) {
    console.log("Falhou como esperado:", error.message);
  }
}


loginUser("superetro85@gmail.com", "Shoko1010!");
