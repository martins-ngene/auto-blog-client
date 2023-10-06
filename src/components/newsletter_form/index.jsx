import React from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "./styles.module.css";
import { Button } from "@/components/buttons";
import { addSubscriber } from "@/helpers";

const schema = yup
  .object({
    first_name: yup.string().required("This field is required"),
    last_name: yup.string().required("This field is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("This field is required"),
  })
  .required();

const NewsLetterForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation({ mutationFn: addSubscriber });

  const submitForm = subscriberInfo => {
    console.log(subscriberInfo);
    // Send form data to endpoint
    mutation.mutate(subscriberInfo);
    // Clear the form
    reset();
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(submitForm)}>
      <div>
        <div className={styles.header}>Newsletter</div>
        <div>
          <p className={styles.welcome_text}>
            Get timely updates on the newest articles with guides and tips for
            learning different technologies right in your mailbox.{" "}
            <strong>Subscribe now!</strong>
          </p>
          <div className={styles.name_container}>
            <div className={styles.first_name}>
              <label className={styles.label} htmlFor='first_name'>
                First Name
              </label>
              <input
                name='first_name'
                className={styles.input}
                id='first_name'
                placeholder='Enter your first name'
                type='text'
                {...register("first_name")}
              />
              <p>{errors.first_name?.message}</p>
            </div>
            <div className={styles.last_name}>
              <label className={styles.label} htmlFor='last_name'>
                Last Name
              </label>
              <input
                name='last_name'
                className={styles.input}
                id='last_name'
                placeholder='Enter your last name'
                type='text'
                {...register("last_name")}
              />
              <p>{errors.last_name?.message}</p>
            </div>
          </div>
          <div>
            <label className={styles.label} htmlFor='email'>
              Email
            </label>
            <input
              name='email'
              className={styles.input}
              id='email'
              placeholder='Enter your email'
              type='email'
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
          </div>
          <div>
            <Button type='submit' fill='full'>
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewsLetterForm;
