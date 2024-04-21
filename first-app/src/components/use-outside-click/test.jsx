import { useRef, useState } from "react";
import useOutsideClick from ".";
import './styles.css';
export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));


  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>Jana Sena Party</h1>
          <img className="pic"  src="./images/jsp.jpg"></img>
          <p className="text">Formation
On 14 March 2014, Power Star Pawan Kalyan submitted the application to register the party name. Kalyan formally launched the party at the HITEC City business district in Madhapur, Hyderabad, on 14 March with a massive meeting. This was followed by another public gathering and meeting in Vizag where he launched his book Ism. The party was approved by the Election Commission on 11 December 2014</p>

<p className="text">Ideology
The main goal of Jana Sena Party is to question any type of corruption in government functioning and organizations and to protect basic rights of people. Jana Sena follows 7 basic ideals promoted as 'Ideals of Jana Sena' ('Jana Sena Sidhanthalu' in Telugu)

Social consciousness without caste
Politics without religious discrimination
Reverence for linguistic diversity
Protection of our traditions and culture
Nationalism without neglecting regional aspirations
Relentless fight against corruption
Progress that preserves the environment
However, there has been confusion around JSP's political philosophy. Despite likening himself to Che Guevara, having communist ideologies, and choosing a red star as his party’s symbol, Kalyan supported BJP in the 2014 elections. However, over the years, he lashed out at the BJP central government for not granting Special Category Status to Andhra Pradesh, multiple times. Again, Jana Sena Party officially entered into an alliance with BJP in January 2020</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}