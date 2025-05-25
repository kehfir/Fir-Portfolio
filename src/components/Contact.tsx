import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: '', // 'success', 'error', 'loading'
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Envoi en cours...' });

    try {
      const serviceID = 'YOUR_SERVICE_ID'; // Remplacez par votre Service ID
      const templateID = 'YOUR_TEMPLATE_ID'; // Remplacez par votre Template ID
      const publicKey = 'YOUR_PUBLIC_KEY'; // Remplacez par votre Public Key

      // Paramètres du template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Firdaouss KEHAILOU', // Votre nom
        reply_to: formData.email
      };

      // Simulation de l'envoi EmailJS (remplacez par le vrai code)
      // const response = await emailjs.send(serviceID, templateID, templateParams, publicKey);

      // Simulation pour la démo
      await new Promise(resolve => setTimeout(resolve, 2000));

      setStatus({
        type: 'success',
        message: 'Votre message a été envoyé avec succès ! Je vous répondrai bientôt.'
      });

      // Réinitialiser le formulaire
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Effacer le message de succès après 5 secondes
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);

    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setStatus({
        type: 'error',
        message: 'Une erreur s\'est produite lors de l\'envoi. Veuillez réessayer.'
      });

      // Effacer le message d'erreur après 5 secondes
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Firdaouss.KEHAILOU@etu.uca.fr',
      href: 'mailto:Firdaouss.KEHAILOU@etu.uca.fr',
      gradient: 'from-emerald-500 to-green-400'
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '06 11 07 53 38',
      href: 'tel:+33611075338',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Clermont-Ferrand, France',
      href: '#',
      gradient: 'from-purple-500 to-violet-400'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/kehfir',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/firdaouss-kehailou-9166a4241/',
      gradient: 'from-blue-600 to-blue-800'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Prenons Contact
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connectons-nous pour discuter d'opportunités, de collaborations, ou simplement échanger sur la technologie et l'innovation.
        </p>
      </div>

      {/* Message de statut */}
      {status.message && (
        <div className={`max-w-2xl mx-auto mb-8 p-4 rounded-lg border ${status.type === 'success'
            ? 'bg-green-50 text-green-800 border-green-200'
            : status.type === 'error'
              ? 'bg-red-50 text-red-800 border-red-200'
              : 'bg-blue-50 text-blue-800 border-blue-200'
          }`}>
          <div className="flex items-center">
            {status.type === 'success' && <CheckCircle size={20} className="mr-2" />}
            {status.type === 'error' && <AlertCircle size={20} className="mr-2" />}
            {status.type === 'loading' && (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-2"></div>
            )}
            <span>{status.message}</span>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Informations de contact */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-emerald-100">
            <div className="flex items-center mb-6">
              <MessageCircle className="text-emerald-600 mr-3" size={28} />
              <h3 className="text-2xl font-semibold text-gray-800">Informations de Contact</h3>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg border border-emerald-100 hover:border-emerald-200 hover:shadow-sm transition-all duration-300 group"
                  >
                    <div className={`p-3 bg-gradient-to-r ${item.gradient} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                      <p className="text-gray-800 font-semibold">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Liens sociaux */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-emerald-100">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Suivez-moi sur les Réseaux</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gradient-to-r ${link.gradient} text-white rounded-lg hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                    aria-label={link.label}
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-emerald-100">
          <div className="flex items-center mb-6">
            <Send className="text-emerald-600 mr-3" size={28} />
            <h3 className="text-2xl font-semibold text-gray-800">Envoyer un Message</h3>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status.type === 'loading'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status.type === 'loading'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="votre.email@exemple.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Sujet <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={status.type === 'loading'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="De quoi s'agit-il ?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                disabled={status.type === 'loading'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Parlez-moi de votre projet, de votre idée, ou dites-moi simplement bonjour !"
              />
            </div>

            <form onSubmit={handleSubmit}>
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-emerald-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status.type === 'loading' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Envoyer le Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Contact;