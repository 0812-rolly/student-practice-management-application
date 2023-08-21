import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import Button from 'components/controls/Button/Button';
import Input from 'components/controls/Input/Input';
import Select from 'components/controls/Select/Select';
import './FormAddingUserToPractice.scss';
import { ACCESS_TOKEN } from 'common/config/index';

const appBase = process.env.REACT_APP_API_BASE_URL;

const FormAddingUserToPractice = ({ closeModal, handleSubmitForm }) => {
  const { practiceId } = useParams();

  const defaultValues = {
    name: '',
    email: '',
    role: { id: 1, name: 'STUDENT' },
    specialization: { id: 1, specialization: 'QA' },
  };

  const roles = [
    { id: 1, name: 'STUDENT' },
    { id: 2, name: 'MENTOR' },
    { id: 3, name: 'HR' },
  ];

  const specializations = [
    { id: 1, name: 'QA' },
    { id: 2, name: 'UI' },
    { id: 3, name: 'Backend' },
    { id: 4, name: 'DevOps' },
  ];

  const inputNameRegex = /(^[A-Z]{1}[a-z]{1,24} [A-Z]{1}[a-z]{1,24}$)|(^[А-Я]{1}[а-я]{1,24} [А-Я]{1}[а-я]{1,24}$)/;

  const {
    handleSubmit, control, setValue, formState: { errors },
  } = useForm({ defaultValues });

  function handleChangeSelectRole(e) {
    const { selectedIndex } = e.currentTarget.options;
    setValue('role', roles[selectedIndex], {
      shouldValidate: true,
      shouldDirty: true,
    });
  }

  function handleChangeSelectSpecialization(e) {
    const { selectedIndex } = e.currentTarget.options;
    setValue('specialization', specializations[selectedIndex], {
      shouldValidate: true,
      shouldDirty: true,
    });
  }

  const onSubmit = (data) => {
    fetch(`${appBase}/practices/${practiceId}/invite?email=${data.email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    }).then(() => {
      handleSubmitForm(data);
    });
  };

  return (
    <div id="participant-form-id" className="participant-form">
      <form onSubmit={handleSubmit((data) => onSubmit(data))} id="participantForm" className="participant-form__body">
        <Controller
          name="name"
          isClearable
          defaultValue=""
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Name is required',
            },
            pattern: {
              value: inputNameRegex,
              message: 'There should be only letters starting with a capital letter, length: 2-15 letters. Whitespace. Only letters starting with a capital letter, length: 2-15 letters.',
            },
          }}
          render={({ field }) => (
            <Input
              className="participant-form__item participant-form__item__input"
              type="text"
              label="Name"
              value={field.value}
              placeholder="Name"
              displayAsterisk
              name="name"
              onChange={(e) => field.onChange(e)}
            />
          )}
        />
        {errors.name && <span className="participant-form__item__errors">{errors.name.message}</span>}
        <Controller
          name="email"
          isClearable
          defaultValue=""
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Email is required',
            },
          }}
          render={({ field }) => (
            <Input
              className="participant-form__item participant-form__item__input"
              type="text"
              label="Email"
              value={field.value}
              placeholder="Email"
              displayAsterisk
              name="email"
              onChange={(e) => field.onChange(e)}
            />
          )}
        />
        {errors.email && <span className="participant-form__item__errors">{errors.email.message}</span>}
        <Controller
          name="role"
          isClearable
          defaultValue={defaultValues.role.name}
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Role is required',
            },
          }}
          render={({ field }) => (
            <Select
              className="participant-form__item participant-form__item__input"
              label="Role"
              options={roles}
              value={field.value.name}
              name="role"
              displayAsterisk
              onChange={handleChangeSelectRole}
            />
          )}
        />
        {errors.role && <span className="participant-form__item__errors">{errors.role.message}</span>}
        <Controller
          name="specialization"
          isClearable
          defaultValue={defaultValues.specialization.name}
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Specialization is required',
            },
          }}
          render={({ field }) => (
            <Select
              className="participant-form__item participant-form__item__input"
              label="Specialization"
              options={specializations}
              value={field.value.name}
              name="specialization"
              displayAsterisk
              onChange={handleChangeSelectSpecialization}
            />
          )}
        />
        {errors.specialization && <span className="participant-form__item__errors">{errors.specialization.message}</span>}
        <div className="participant-form__item buttons-wrapper">
          <Button
            id="button-submit"
            className="participant-form__button"
            type="submit"
            title="Confirm"
          />
          <Button
            id="button-cancel"
            className="participant-form__button"
            type="button"
            title="Cancel"
            onClick={closeModal}
          />
        </div>
      </form>
    </div>
  );
};

FormAddingUserToPractice.propTypes = {
  closeModal: PropTypes.func.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
};

export default FormAddingUserToPractice;
