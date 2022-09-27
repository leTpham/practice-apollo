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


// const ADD_USER = gql`
//   mutation AddUser($username: ID!, $first: String!, $last: String!) {
//     createUser(username: $username, first_name: $first, last_name: $last) {
//       username
//     }
//   }
// `;




// function AddUserForm() {
//   const [formData, setFormData] = useState({
//     username: "",
//     firstName: "",
//     lastName: "",
//   });

//   const [createUser, { data, loading, error }] = useMutation(ADD_USER);

//   if (loading) return 'Submitting...';
//   if (error) return `Submission error! ${error.message}`;



//   function handleChange(evt) {
//     const { name, value } = evt.target;
//     setFormData(fd => ({ ...fd, [name]: value }));
//   }

//   async function handleSubmit(evt) {
//     evt.preventDefault();
//       createUser({variables: {
//           username: formData.username,
//           first: formData.firstName,
//           last: formData.lastName
//         }})
//       setFormData("");
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
//             <legend>Sign Up:</legend>
//             <FormGroup>

//               <Label for="username">Username:</Label>
//               <Input
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange} />

//               <Label for="first_name">First name</Label>
//               <Input
//                 id="first_name"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange} />

//               <Label for="last_name">Last name:</Label>
//               <Input
//                 id="last_name"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange} />

//             </FormGroup>

//             <Button color="primary">Sign up</Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container >
//   );


// }

// export default AddUserForm;