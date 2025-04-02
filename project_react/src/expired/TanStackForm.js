import React from 'react';
import { useForm } from '@tanstack/react-form';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import bcrypt from 'bcryptjs';

export default function App() {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      //confirm_password: '',

    },
    onSubmit: async (values) => {
      const hashedPassword = await bcrypt.hash(values.value.password, 10);
      values.value.password = hashedPassword;
      console.log('Submitted values:', values.value);
      axios
        .post('http://localhost:8000/user/register', values.value)
        .then((response) => {
          console.log('Data sent successfully:', response.data);
        })
        .catch((error) => {
          console.error('There was an error sending the data:', error);
        });
    },
  });

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Registration Form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div className="mb-3">
          <form.Field
            name="name"
            validators={{
              onChange: ({value}) => {
                if(!value) {
                  return 'Name is required';
                }
                else {
                  return undefined;
                }
              }
            }}
            children={(field) => (
              <div>
                <label className="form-label">Name</label>
                <input
                  className="form-control"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors ? (
                  <em role="alert">{field.state.meta.errors.join(', ')}</em>
                ) : null}
              </div>
            )}
          />
        </div>
        <div className="mb-3">
          <form.Field
            name="email"
            validators={{
              onChange: ({value}) => {
                if(!value) {
                  return 'Email is required';
                }
                else {
                  return undefined;
                }
              }
            }}
            children={(field) => (
              <div>
                <label className="form-label">Email</label>
                <input
                  className="form-control"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors ? (
                  <em role="alert">{field.state.meta.errors.join(', ')}</em>
                ) : null}
              </div>
            )}
          />
        </div>
        <div className="mb-3">
          <form.Field
            name="password"
            validators={{
              onChange: ({value}) => {
                if(!value) {
                  return 'Email is required';
                }
                else {
                  return undefined;
                }
              }
            }}
            children={(field) => (
              <div>
                <label className="form-label">Password</label>
                <input
                  className="form-control"
                  name={field.name}
                  value={field.state.value}
                  type="password"
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors ? (
                  <em role="alert">{field.state.meta.errors.join(', ')}</em>
                ) : null}
              </div>
            )}
          />
        </div>
        
        
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}