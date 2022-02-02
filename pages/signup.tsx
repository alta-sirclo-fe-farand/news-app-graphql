import { useState } from "react";
import SimpleLayout from "../components/layout/simple";

export default function Signup() {
  return (
    <SimpleLayout>
      <div className="d-flex justify-content-center">
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Username</label>
            <input type="text" className="form-control" id="formGroupExampleInput" />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Password</label>
            <input type="password" className="form-control" id="formGroupExampleInput2"/>
          </div>
          <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </form>
      </div>
    </SimpleLayout>
  );
}
