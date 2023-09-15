// import React from 'react';
// import Header from '../components/Header';
// import Image from 'next/image';
// import styleHome from '../components/css/Home.module.css';
// import Bot from '@/components/Bot';
// import ens_fundamental_3 from '../images/Ensino Fundamental (3) (1).png'
// import ens_fund_4 from '../images/Ensino Fundamental (4).png'
// import ensino_fund from '../images/Ensino Fundamental (5).png'
// import Footer from '../components/Footer';
// import img_logo from '../images/Executivo (1).png';
// import img_col_exec from '../images/site - executivo MVV.png';

// export default function Home() {
//     return (
//       <div className={`${styleHome.main} ${styleHome.background_image}`}>
//         <div className={styleHome.homeDiv}>
//           <Header />
//           <Image src={ens_fundamental_3} alt='logo' className={styleHome.img}/>
//           <Image src={ens_fund_4} alt='logo' className={styleHome.img}/>
//           <Image src={ensino_fund} alt='logo' className={styleHome.img}/>
//         </div>
//         <Bot />
//         <div className={`${styleHome.main} ${styleHome.background_image_2}`}>
//           <div className={styleHome.teste}>
//           <Image className={`${styleHome.img_nivel1} ${styleHome.img}`} src={img_logo} alt='logo-executivo-45-anos'/>
//           <div className={styleHome.mainH1_nivel1}>
//             <h1 className={styleHome.h1}>Colégio Executivo, há 45 anos <br></br>inspirando atitudes e grandes <br></br>conquistas!</h1>
//             <p className={styleHome.text}>Somos uma instituição educacional fundada em 1978. Comemoramos, no ano de 2023, nossos 45 (quarenta e cinco) anos de efetivo serviço educacional prestado, principalmente. Tudo começou com um sonho, uma jovem educadora e uma proposta inovadora. A Professora Conceição, com simplicidade, honestidade e coragem, fundou em 28 de setembro de 1978 a Escola da Abelhinha.</p>
//             <p className={styleHome.text}>A Escola da Abelhinha iniciou suas atividades em uma casa alugada desenvolvendo o magistério para turmas da Educação Infantil - antes chamada de Jardim da Infância e, logo após dois anos de funcionamento, atendendo ao pedido dos pais de alunos, a Escola expandiu até o 1º grau, etapa hoje denominada de Ensino Fundamental. Mas não parou por aí…</p>
//           </div>
//           </div>
//           <div className={styleHome.mainH1_nivel2}>
//             <p className={styleHome.text}>Com a demanda cada vez mais crescente, fruto de um trabalho de qualidade, foi realizada uma ampliação física e estrutural da Escola, já então em sede própria. Com a grande reforma do prédio, a Escola da Abelhinha começou a receber alunos do 1º e 2º grau - etapa atualmente denominada de Ensino Médio. Juntamente com a instituição, cresceram também as crianças; elas não mais queriam estudar em uma instituição com nome de Jardim da Infância e então a Escola da Abelhinha foi rebatizada, passando desde então a chamar-se Colégio Executivo.</p>
//             <p className={styleHome.text}>Cinco anos após a ampliação do prédio, em 2003, essas instalações foram acrescidas do novo ginásio poliesportivo, agora acoplado à escola. Em 2013, devido à grande procura e a necessidade de um espaço exclusivo para os pequenos alunos, o Colégio Executivo se renovou. Um projeto das arquitetas Ana Emídia e Paula Duarte trouxe novos ambientes à estrutura física do Colégio.</p>
//             <p className={styleHome.text}>Passados 40 anos, nós temos orgulho de receber os filhos de ex-alunos, os quais revivem os momentos de estudantes ao revisitar os espaços internos, pelas experiências de aprendizagens e de descobertas dos seus filhos. É... O tempo passa, o clima muda, o planeta aquece, o menino cresce, tudo naturalmente muda. Só não mudam os sonhos da Professora Conceição, os quais não só fizeram crescer as paredes desta Casa mas alicerçaram ideais de muitos que por aqui passaram e passam.</p>
//           </div>
//         </div>
//         <Image className={styleHome.img_misão} src={img_col_exec} alt='colegio-executivo-missão-visão'/>
//         <Footer />
//       </div>
//     ) 
// }
import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import styleHome from '../components/css/Home.module.css';
import Bot from '@/components/Bot';
import ensFundamental3Img from '../images/Ensino Fundamental1.png';
import ensFundamental4Img from '../images/Ensino Fundamental2.png';
import ensinoFundamentalImg from '../images/Ensino Fundamental3.png';
import Footer from '../components/Footer';
import logoExecutivoImg from '../images/Executivo1.png';
import colExecImg from '../images/siteExecutivoMVV.png';

export default function Home() {
    return (
      <div className={`${styleHome.main} ${styleHome.backgroundImage}`}>
        <div className={styleHome.contentContainer}>
          <Header />
          <Image src={ensFundamental3Img} alt='logo' className={styleHome.image}/>
          <Image src={ensFundamental4Img} alt='logo' className={styleHome.image}/>
          <Image src={ensinoFundamentalImg} alt='logo' className={styleHome.image}/>
        </div>
        <Bot />
        <div className={`${styleHome.main} ${styleHome.backgroundImage2}`}>
          <div className={`${styleHome.main2} ${styleHome.contentContainer2}`}>
            <Image className={`${styleHome.logoImage} ${styleHome.image}`} src={logoExecutivoImg} alt='logo-executivo-45-anos'/>
            <div className={styleHome.mainContentLevel1}>
              <h1 className={styleHome.heading}>Colégio Executivo, há 45 anos <br></br>inspirando atitudes e grandes <br></br>conquistas!</h1>
              <p className={styleHome.paragraph}>Somos uma instituição educacional fundada em 1978. Comemoramos, no ano de 2023, nossos 45 (quarenta e cinco) anos de efetivo serviço educacional prestado, principalmente. Tudo começou com um sonho, uma jovem educadora e uma proposta inovadora. A Professora Conceição, com simplicidade, honestidade e coragem, fundou em 28 de setembro de 1978 a Escola da Abelhinha.</p>
              <p className={styleHome.paragraph}>A Escola da Abelhinha iniciou suas atividades em uma casa alugada desenvolvendo o magistério para turmas da Educação Infantil - antes chamada de Jardim da Infância e, logo após dois anos de funcionamento, atendendo ao pedido dos pais de alunos, a Escola expandiu até o 1º grau, etapa hoje denominada de Ensino Fundamental. Mas não parou por aí…</p>
            </div>
          </div>
          <div className={styleHome.mainContentLevel2}>
            <p className={styleHome.paragraph}>Com a demanda cada vez mais crescente, fruto de um trabalho de qualidade, foi realizada uma ampliação física e estrutural da Escola, já então em sede própria. Com a grande reforma do prédio, a Escola da Abelhinha começou a receber alunos do 1º e 2º grau - etapa atualmente denominada de Ensino Médio. Juntamente com a instituição, cresceram também as crianças; elas não mais queriam estudar em uma instituição com nome de Jardim da Infância e então a Escola da Abelhinha foi rebatizada, passando desde então a chamar-se Colégio Executivo.</p>
            <p className={styleHome.paragraph}>Cinco anos após a ampliação do prédio, em 2003, essas instalações foram acrescidas do novo ginásio poliesportivo, agora acoplado à escola. Em 2013, devido à grande procura e a necessidade de um espaço exclusivo para os pequenos alunos, o Colégio Executivo se renovou. Um projeto das arquitetas Ana Emídia e Paula Duarte trouxe novos ambientes à estrutura física do Colégio.</p>
            {/* <p className={styleHome.paragraph}>Passados 40 anos, nós temos orgulho de receber os filhos de ex-alunos, os quais revivem os momentos de estudantes ao revisitar os espaços internos, pelas experiências de aprendizagens e de descobertas dos seus filhos. É... O tempo passa, o clima muda, o planeta aquece, o menino cresce, tudo naturalmente muda. Só não mudam os sonhos da Professora Conceição, os quais não só fizeram crescer as paredes desta Casa mas alicerçaram ideais de muitos que por aqui passaram e passam.</p> */}
          </div>
        </div>
        <Image className={styleHome.missionImage} src={colExecImg} alt='colegio-executivo-missão-visão'/>
        <Footer />
      </div>
    ) 
}
