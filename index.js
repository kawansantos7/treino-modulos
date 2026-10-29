
import { PI, somar } from "./matematica.js";
import saudarUsuario from "./saudacao.js";
import { formatar as enfeitarTexto } from "./utilitarios.js";

// Exercício 3: Matemática
console.log("=== MATEMÁTICA ===");
console.log("Valor de PI:", PI);
console.log("Soma de 15 + 30:", somar(15, 30));

// Exercício 4: Saudação
console.log("\n=== SAUDAÇÃO ===");
console.log(saudarUsuario("Kawan"));

// Exercício 5: Utilitários
console.log("\n=== UTILITÁRIOS ===");
console.log(enfeitarTexto("Node.js Módulos"));
