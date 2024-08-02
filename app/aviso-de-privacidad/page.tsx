import styles from "./page.module.css";
import Navbar from "../components/globalComponents/navbar";
import Footer from "../components/globalComponents/footer";

export default function AvisoDePrivacidad() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Aviso de privacidad</h1>
        <div className={styles.section}>
          <h2>1. Datos Personales Recabados</h2>
          <div className={styles.content}>
            <p>
              Recabamos los siguientes datos personales: nombre, dirección, correo
              electrónico, número telefónico, historial académico, entre otros.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <h2>2. Finalidad del Tratamiento de Datos</h2>
          <div className={styles.content}>
            <p>
              Los datos personales serán utilizados para los siguientes fines:
            </p>
            <ul>
              <li>Gestión académica y administrativa</li>
              <li>Comunicación institucional</li>
              <li>Investigación y estadística</li>
              <li>Cumplimiento de obligaciones legales</li>
            </ul>
          </div>
        </div>
        <div className={styles.section}>
          <h2>3. Fundamento Legal</h2>
          <div className={styles.content}>
            <p>
              El tratamiento de sus datos personales se realiza conforme a lo
              establecido en la Ley Federal de Protección de Datos Personales en
              Posesión de los Particulares y otras normativas aplicables.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <h2>4. Compartición de Datos</h2>
          <div className={styles.content}>
            <p>Sus datos personales podrán ser compartidos con:</p>
            <ul>
              <li>Proveedores de servicios tecnológicos</li>
              <li>Instituciones educativas con convenios</li>
              <li>Autoridades competentes en cumplimiento de obligaciones legales</li>
            </ul>
          </div>
        </div>
        <div className={styles.section}>
          <h2>5. Medidas de Seguridad</h2>
          <div className={styles.content}>
            <p>
              Implementamos medidas de seguridad administrativas, técnicas y físicas
              para proteger sus datos personales.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <h2>6. Derechos ARCO</h2>
          <div className={styles.content}>
            <p>
              Usted tiene derecho a acceder, rectificar, cancelar u oponerse al
              tratamiento de sus datos personales en cualquier momento.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <h2>7. Plazos de Conservación</h2>
          <div className={styles.content}>
            <p>
              Conservaremos sus datos personales durante el tiempo necesario para
              cumplir con los fines descritos en este Aviso de Privacidad.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <h2>8. Contacto</h2>
          <div className={styles.content}>
            <p>Para cualquier duda o solicitud relacionada con el tratamiento de sus datos personales, puede comunicarse con nosotros a [Correo Electrónico de Contacto] o al teléfono [Número de Teléfono].</p>
          </div>
         </div>
        <div className={styles.section}>
        <h2>9. Cambios en el Aviso de Privacidad</h2>
          <div className={styles.content}>
        <p>Nos reservamos el derecho de modificar este Aviso de Privacidad. Cualquier cambio será comunicado a través de nuestro sitio web.</p>
            </div>        
        </div>

        <div className={styles.date}>
        <p>Fecha de última actualización: <strong>Agosto 2, 2024</strong></p>
        </div>

        </div>
        <Footer/>
        </>
    );
}