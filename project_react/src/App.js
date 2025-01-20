import React from 'react';
import { useForm } from '@tanstack/react-form';
import axios from 'axios';

export default function App() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirm_password:'',
      gender: '',
      school: '',
    },
    onSubmit: async (values) => {
      console.log('Submitted values:', values);
      axios.post('http://localhost:8000/user/register', values)
            .then(response => {
                console.log('Data sent successfully:', response.data);
            })
            .catch(error => {
                console.error('There was an error sending the data:', error);
            });
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div>
          <form.Field
            name="email"
            children={(field) => (
              <div>
                <label>Email</label>
                <input
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          />
        </div>
         <div>
          <form.Field
            name="password"
            children={(field) => (
              <div>
                <label>Password:</label>
                <input
                  name={field.name}
                  value={field.state.value}
                  type="password"
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          />
        </div>
        <div>
          <form.Field
            name="confirm_password"
            children={(field) => (
              <div>
                <label> Confirm Password:</label>
                <input
                  name={field.name}
                  value={field.state.value}
                  type="password"
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          />
        </div>
        <div>
          <form.Field
          name="gender"
          children={(field) => (
            <div>
              <label>Gender:</label>
              <label>
                <input
                  type="radio"
                  name={field.name}
                  value="man"
                  checked={field.state.value === 'man'}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                Man
              </label>
              <label>
                <input
                  type="radio"
                  name={field.name}
                  value="woman"
                  checked={field.state.value === 'woman'}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                Woman
              </label>
            </div>
          )}
          
          />
        </div>
        <div>
          <form.Field
            name="school"
            children={(field) => (
              <div>
                <label>Szkola:</label>
                <select
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                >
                  <option value="">Wybierz swoja szkole</option>
                  <option value="sci">sci</option>
                  <option value="tme">tme</option>
                  <option value="twojstary">twojstary</option>
                  <option value="teb">teb</option>
                  <option value="toiz">toiz</option>
                </select>
              </div>
            )}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
