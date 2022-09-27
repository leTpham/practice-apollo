// import { gql, useMutation } from '@apollo/client';
// import { useState } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Button
// } from "reactstrap";


// const ADD_MESSAGE = gql`
//   mutation AddMessage ($username: ID!, $message: String!) {
//     createMessage (username: $username, body: $message) {
//       body
//     }
//   }
// `;




// function AddMessageForm() {
//   const [formData, setFormData] = useState({
//     username: "",
//     message: ""
//   });

//   const [createMessage, { data, loading, error }] = useMutation(ADD_MESSAGE);

//   if (loading) return 'Submitting...';
//   if (error) return `Submission error! ${error.message}`;



//   function handleChange(evt) {
//     const { name, value } = evt.target;
//     setFormData(fd => ({ ...fd, [name]: value }));
//   }

//   function handleSubmit(evt) {
//     evt.preventDefault();
//       createMessage({variables: {
//           username: formData.username,
//           message: formData.message
//         }})
//       setFormData({username: "",
//       message: ""});
//   }

//   return (
//     <Container style={{ marginTop: "16rem" }}>
//       <Row>
//         <Col
//           className="bg-white bg-opacity-50 border rounded"
//           md={{ offset: 3, size: 6 }}
//           sm="12">
//           <Form
//             onSubmit={handleSubmit}
//             style={{ padding: "0.5rem" }}>
//             <legend>Send a message:</legend>
//             <FormGroup>

//               <Label for="username">Username:</Label>
//               <Input
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange} />

//               <Label for="message">Message:</Label>
//               <Input
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange} />

//             </FormGroup>

//             <Button color="primary">Send a message</Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container >
//   );


// }

// export default AddMessageForm;