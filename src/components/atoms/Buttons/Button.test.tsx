import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe('Button Testing Render', () => {
    test('Render button component',()=>{
        render(<Button label='heeeey'/>)
    })

    test("Render SnapShot", () => {
		expect(render(<Button label='heeeey'/>)).toMatchSnapshot();
	})
})

