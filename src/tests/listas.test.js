import { shallow } from "enzyme";
import { renderHook, act } from "@testing-library/react-hooks";
import { ListasComponentes } from "../componentes/ListasComponentes";
import { useListas } from "../hooks/useListas";

test("Verificar button", () => {
  const wrapper = shallow(<ListasComponentes />);
  const btn1 = wrapper.find("button").at(0);
  console.log(btn1.html());
  console.log("ensayo 0: ", wrapper.find("button").at(0).html());
});

describe("useListas", () => {
  const arraypersonas = ["Diana", "Alejandra", "Felipe"];
  const arrayFrutas = ["Manzana", "Mango", "Banano"];
  it("Debe dar un objeto con la info válida", () => {
    const myFuncComp = renderHook(() => useListas(arrayFrutas, arraypersonas));
    const expected = "Diana";
    const received = myFuncComp.result.current.randomObjeto().Diana;
    expect(received).toEqual(expected);
  });
});
