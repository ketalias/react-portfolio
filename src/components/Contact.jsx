import { useState } from 'react';
import { MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    { icon: Send, label: "Telegram", value: "@romakkk", href: "https://t.me/romakkk" },
    { icon: Phone, label: "Phone", value: "+380 63 550 2529", href: "tel:+380635502529" },
    { icon: MapPin, label: "Location", value: "Ужгород, Україна", href: null }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Повідомлення відправлено!');
  };

  return (
    <section className="py-12 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">Контакти</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Зв'яжіться зі мною</h2>
          <p className="text-gray-400 mt-4 text-lg">Готовий обговорити ваш наступний проект</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, idx) => (
            <a
              key={idx}
              href={info.href || '#'}
              className={`p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl hover:border-red-500/30 transition-all text-center group ${!info.href && 'pointer-events-none'}`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-gray-400 text-sm mb-1">{info.label}</div>
              <div className="text-white font-semibold">{info.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;