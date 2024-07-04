import React from 'react';
function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-8 rounded-lg shadow-md">
      <p className="text-center">&copy; 2024 Dollar News. Todos os direitos reservados.</p>
      <ul className="flex justify-center space-x-4 mt-4">
        <li className="footer-item">
          <a href="#privacy" className="text-gray-400 hover:text-gray-200 transition-colors">Política de Privacidade</a>
        </li>
        <li className="footer-item">
          <a href="#terms" className="text-gray-400 hover:text-gray-200 transition-colors">Termos de Serviço</a>
        </li>
        <li className="footer-item">
          <a href="#contact" className="text-gray-400 hover:text-gray-200 transition-colors">Contato</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

