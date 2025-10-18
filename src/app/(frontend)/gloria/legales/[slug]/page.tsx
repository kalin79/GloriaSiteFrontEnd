import FullPageComponent from '@/components/banners/FullPage';
import DescriptionComponent from '@/components/legal/Descripcion';
const page = () => {
    const dataLegal = {
        logoMarca: '/gloriaMarca.svg',
        titular: `Términos y <br />condiciones`,
        titularCampana: `Campaña 2025 para Gloria: Comienza un nuevo regreso a clases!`,
        description: `<p>Leche Gloria S.A. (en adelante, “LA EMPRESA”), identificada con RUC N° 20100190797, ubicada en Av. República de Panamá 2461, Urb. Santa Catalina, La Victoria; reconoce la importancia que tiene la privacidad de los datos personales de nuestros usuarios, por ello, garantizamos la absoluta confidencialidad de los mismos y el empleo de estándares de seguridad conforme a lo establecido en la Ley de Protección de Datos Personales - Ley N° 29733 y su Reglamento aprobado por el Decreto Supremo N° 003-2013-JUS (en adelante, “las normas de protección de datos personales”). La EMPRESA es el primer responsable del tratamiento de datos de tu información personal. Los principios que se fijan en esta Política de Privacidad se aplican a todos los responsables del tratamiento de datos de LA EMPRESA</p>
        <h2>1. Principales términos y definiciones</h2>
        <ul><li>”Datos personales”: Es toda información que pueda identificar a una persona natural o que la hace identificable a través de medios que pueden ser razonablemente utilizados. Por ejemplo: Nombres y Apellidos, Documento de Identidad, Estado Civil, entre otros. </li>
        <li>“Tratamiento de datos personales”: Se refiere a cualquier operación o conjunto de operaciones que se realice con tus datos personales, ya sea o no mediante medios automáticos, que incluye recogida de datos, </li></ul>
        <h2>2. Identificación y finalidad de los bancos de datos personales</h2>
        <ul><li>”Datos personales”: Es toda información que pueda identificar a una persona natural o que la hace identificable a través de medios que pueden ser razonablemente utilizados. Por ejemplo: Nombres y Apellidos, Documento de Identidad, Estado Civil, entre otros. </li>
        <li>“Tratamiento de datos personales”: Se refiere a cualquier operación o conjunto de operaciones que se realice con tus datos personales, ya sea o no mediante medios automáticos, que incluye recogida de datos, </li></ul>`,
    }
    return (
        <div>
            <FullPageComponent dataLegal={dataLegal} />
            <DescriptionComponent dataLegal={dataLegal} />
        </div>
    )
}

export default page
