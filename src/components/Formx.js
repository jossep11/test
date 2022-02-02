import React from "react";
import { Button, Form, Col, Row, InputGroup } from "react-bootstrap";
import { Formik } from "formik";

export default function Formx() {
  return (
    <div className="container-md">
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
        }}
        validate={(valores) => {
          let errors = {};

          if (!valores.nombre) {
            errors.nombre = "Por favor ingrese un nombre";
          }

          if (!valores.apellido) {
            errors.apellido = "Por favor ingrese un apellido";
          }
          console.log("test");
          return errors;
        }}
        onSubmit={(valores, { resetForm }) => {
          console.log(valores);
          resetForm();
        }}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            {console.log(errors)}
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  name={"nombre"}
                  value={values.nombre}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.nombre && !errors.nombre}
                  isInvalid={touched.nombre && errors.nombre}
                />
                <Form.Control.Feedback></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {touched.nombre && errors.nombre}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  name={"apellido"}
                  onBlur={handleBlur}
                  value={values.apellido}
                  onChange={handleChange}
                  isValid={touched.apellido && !errors.apellido}
                  isInvalid={touched.apellido && errors.apellido}
                />

                <Form.Control.Feedback></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {touched.apellido && errors.apellido}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="State" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" placeholder="Zip" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>

            <Form.Group className="d-flex justify-content-center">
              <Button size="lg" type="submit">
                Submit form
              </Button>
            </Form.Group>
          </Form>
        )}
      </Formik>
    </div>
  );
}
