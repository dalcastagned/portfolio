import { GrMail } from 'react-icons/gr';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

import * as S from './styles';
import { Button } from '../../styles/globalStyles';

function Contact() {
  const form = useRef();
  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm('service_1jzawzv', 'template_ssdnrbd', form.current, 'YLMjiA7Wk6sjpqoJZ')
      .then(() => toast.success('Mensagem enviada com sucesso!'))
      .catch(() => toast.error('Erro ao enviar mensagem!'));

    e.target.reset();
  };

  return (
    <S.Section id="contact">
      <h5>Vamos Conversar</h5>
      <h2>Meus Contatos</h2>

      <S.ContainerContact>
        <S.Options>
          <article>
            <GrMail />
            <h4>Email</h4>
            <a href="mailto:contato@danieldalcastagne.com" target="_blank" rel="noreferrer">
              contato@danieldalcastagne.com
            </a>
          </article>
          <article>
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=5547988956851&text=Ol%C3%A1%2C%20entrei%20no%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho!"
              target="_blank"
              rel="noreferrer"
            >
              (47) 98895-6851
            </a>
          </article>
        </S.Options>
        <S.Form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Nome Completo" name="name" required />
          <input type="text" placeholder="Email" name="email" required />
          <textarea name="message" rows="7" placeholder="Mensagem" required />
          <Button type="submit" primary>
            Enviar
          </Button>
        </S.Form>
      </S.ContainerContact>
    </S.Section>
  );
}

export default Contact;
