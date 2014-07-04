package util;

import javax.mail.Message.RecipientType;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.MessagingException;

import org.springframework.mail.MailException;
import org.springframework.mail.MailSender;
import org.springframework.mail.javamail.JavaMailSender;





public class MailMail {
	
	private JavaMailSender mailSender;
	 
	public void setMailSender(JavaMailSender mailSender) {
		this.mailSender = mailSender;
	}
 
	public void sendMail(String from, String to, String subject, String msg) {
 
		MimeMessage message = mailSender.createMimeMessage();  
		
  try{
  	
		message.setSubject(subject , "UTF-8");
		message.setText(msg, "UTF-8", "html");
		message.setFrom(new InternetAddress(from));
		message.addRecipient(RecipientType .TO, new InternetAddress(to));
		
		mailSender.send(message);
		
	  } catch (MessagingException e){
		e.printStackTrace();
		return;
	} catch (MailException e) {
    e.printStackTrace();
    return;
   }
  
	}
}

