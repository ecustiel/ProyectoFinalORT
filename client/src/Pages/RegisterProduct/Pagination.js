import { useState } from "react";
import FirstStep from "./FirstStage";
import SecondStage from "./SecondStage";
import ThirdStage from "./ThirdStage";
import FourthStage from "./FourthStage";
import FifthStage from "./FifthStage";
import SixthStage from "./SixthStage";
import "./styles.css";

import { Steps, Panel, Placeholder, ButtonGroup, Button } from "rsuite";

export const Pagination = () => {
  const state = {
    title: "",
    temporada: [
      {
        temp1: "",
        prec1: "",
      },
      {
        temp2: "",
        prec2: "",
      },
      {
        temp3: "",
        prec3: "",
      },
    ],
  };

  const [step, setStep] = useState(0);
  const [valuesToBase, setValuesToBase] = useState(state);

  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 5 ? 5 : nextStep);
  };

  const onNext = () => {
    onChange(step + 1);
  };
  const onPrevious = () => onChange(step - 1);
  let Render = null;

  const handleChange = (input) => (e) => {
    this.setValuesToBase({ [input]: e.target.value });
  };

  console.log(valuesToBase);

  switch (step) {
    case 0:
      Render = <FirstStep onNext={onNext} />;
      break;
    case 1:
      Render = <SecondStage valuesToBase={valuesToBase} />;
      break;
    case 2:
      Render = <ThirdStage />;
      break;
    case 3:
      Render = <FourthStage />;
      break;
    case 4:
      Render = <FifthStage />;
      break;
    case 5:
      Render = <SixthStage />;
      break;
    default:
      <FirstStep />;
      break;
  }

  return (
    <div class="mt-5 w-75 vh-75 mx-auto">
      <Steps current={step}>
        <Steps.Item title="Paso 1" description="Datos de la Operacion" />
        <Steps.Item title="Paso 2" description="Datos Generales" />
        <Steps.Item title="Paso 3" description="Detalles de la Propiedad" />
        <Steps.Item title="Paso 4" description="Confort" />
        <Steps.Item title="Paso 5" description="Gestion de Imagenes" />
        <Steps.Item title="Finalizar" description="Descripcion" />
      </Steps>
      <hr />
      <Panel shaded>{Render}</Panel>

      <ButtonGroup className="btnGroup">
        <Button onClick={onPrevious} disabled={step === 0}>
          Previous
        </Button>
        <Button onClick={onNext} disabled={step === 5}>
          Next
        </Button>
        <Button onClick={onsubmit} disabled={step !== 5}>
          Confirmar
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Pagination;
