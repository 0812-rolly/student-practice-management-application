import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import fetchLocations from 'store/locations/utils';
import fetchFormRequest from 'store/formRequest/utils';
import Button from 'components/controls/Button/Button';
import Input from 'components/controls/Input/Input';
import Textarea from 'components/controls/Textarea/Textarea';
import Select from 'components/controls/Select/Select';
import './RequestForm.scss';

let text;
let textNotif;

function RequestForm() {
  text = useSelector((state) => state.user.siteText.request_form);
  textNotif = useSelector((state) => state.user.siteText.request_form.notifications);

  const defaultValues = {
    name: '',
    education: '',
    technicalSkills: '',
    experience: '',
    location: {
      id: 1,
      name: text.location_field.default_location,
    },
    languages: '',
    summary: '',
    phoneNumber: '',
    contacts: '',
  };

  const textAreaRegex = /^[^\s][а-яА-Яa-zA-Z0-9\s?!@;:+-,.'Ёё]*$/;
  const inputNameRegex = /(^[A-Z]{1}[a-z]{1,24} [A-Z]{1}[a-z]{1,24}$)|(^[А-Я]{1}[а-я]{1,24} [А-Я]{1}[а-я]{1,24}$)/;
  const phoneRegex = /^((\+7|7|8)+([0-9]){10})$/;

  const [selectedFile, setSelectedFile] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  const dispatch = useDispatch();

  const { locations } = useSelector((state) => state.locations);
  useEffect(() => {
    dispatch(fetchLocations());
  }, []);

  const {
    handleSubmit, control, setValue, reset, formState: { errors },
  } = useForm({ defaultValues });

  function handleChangeFile(e) {
    setSelectedFile(e.target.files[0]);
    setIsSelected(true);
  }

  function handleChangeSelect(e) {
    const { selectedIndex } = e.currentTarget.options;
    setValue('location', locations[selectedIndex], {
      shouldValidate: true,
      shouldDirty: true,
    });
  }

  const onSubmit = (data) => {
    const requestBody = new FormData();

    requestBody.append('cv', new Blob([JSON.stringify(data)], {
      type: 'application/json',
    }));
    if (isSelected) {
      requestBody.append('photo', selectedFile);
    }

    dispatch(fetchFormRequest(requestBody, textNotif));
    reset();
    setIsSelected(false);
    setSelectedFile(null);
  };

  return (
    <div id="request-id" className="request-form">
      <form onSubmit={handleSubmit((data) => onSubmit(data))} id="requestForm" className="request-form__body">
        <Controller
          name="name"
          isClearable
          defaultValue=""
          control={control}
          rules={{
            required: {
              value: true,
              message: text.name_field.required_message,
            },
            pattern: {
              value: inputNameRegex,
              message: text.name_field.pattern_message,
            },
          }}
          render={({ field }) => (
            <Input
              className="request-form__item request-form__item__input"
              type="text"
              label={text.name_field.label}
              value={field.value}
              placeholder={text.name_field.placeholder}
              displayAsterisk
              name="name"
              onChange={(e) => field.onChange(e)}
            />
          )}
        />
        {errors.name && <span className="request-form__item__errors">{errors.name.message}</span>}
        <Input
          className="request-form__item request-form__item__photo"
          id="uploadFile"
          type="file"
          label={text.photo_field.label}
          name="photo"
          onChange={handleChangeFile}
          fileInfo={isSelected ? `Filename: ${selectedFile.name}` : text.photo_field.missed_file_message}
        />
        <Controller
          name="education"
          isClearable
          defaultValue=""
          control={control}
          rules={{ required: false }}
          render={({ field }) => (
            <Textarea
              className="request-form__item request-form__item__input"
              type="text"
              label={text.education_field.label}
              value={field.value}
              placeholder={text.education_field.placeholder}
              name="education"
              onChange={(e) => field.onChange(e)}
            />
          )}
        />
        <Controller
          name="location"
          isClearable
          defaultValue={defaultValues.location.name}
          control={control}
          rules={{
            required: {
              value: true,
              message: text.location_field.required_message,
            },
          }}
          render={({ field }) => (
            <Select
              className="request-form__item request-form__item__input"
              label={text.location_field.label}
              options={locations}
              value={field.value.name}
              name="location"
              displayAsterisk
              onChange={handleChangeSelect}
            />
          )}
        />
        {errors.location && <span className="request-form__item__errors">{errors.location.message}</span>}
        <Controller
          name="technicalSkills"
          isClearable
          defaultValue=""
          control={control}
          rules={{
            required: {
              value: true,
              message: text.technicalSkills_field.required_message,
            },
            pattern: {
              value: textAreaRegex,
              message: text.technicalSkills_field.pattern_message,
            },
          }}
          render={({ field }) => (
            <Textarea
              className="request-form__item request-form__item__input"
              type="text"
              label={text.technicalSkills_field.label}
              value={field.value}
              placeholder={text.technicalSkills_field.placeholder}
              displayAsterisk
              name="technicalSkills"
              onChange={(e) => field.onChange(e)}
            />
          )}
        />
        {errors.technicalSkills && <span className="request-form__item__errors">{errors.technicalSkills.message}</span>}
        <Controller
          name="experience"
          isClearable
          defaultValue=""
          control={control}
          rules={{ required: false }}
          render={({ field }) => (
            <Textarea
              className="request-form__item request-form__item__input"
              type="text"
              label={text.experience_field.label}
              value={field.value}
              placeholder={text.experience_field.placeholder}
              name="experience"
              onChange={(e) => field.onChange(e)}
            />
          )}
        />
        <Controller
          name="languages"
          isClearable
          defaultValue=""
          control={control}
          rules={{
            required: {
              value: true,
              message: text.languages_field.required_message,
            },
            pattern: {
              value: textAreaRegex,
              message: text.languages_field.pattern_message,
            },
          }}
          render={({ field }) => (
            <Textarea
              className="request-form__item request-form__item__input"
              type="text"
              label={text.languages_field.label}
              value={field.value}
              placeholder={text.languages_field.placeholder}
              displayAsterisk
              name="languages"
              onChange={(e) => field.onChange(e)}
            />
          )}
        />
        {errors.languages && <span className="request-form__item__errors">{errors.languages.message}</span>}
        <Controller
          name="summary"
          isClearable
          defaultValue=""
          control={control}
          rules={{ required: false }}
          render={({ field }) => (
            <Textarea
              className="request-form__item request-form__item__input"
              type="text"
              label={text.summary_field.label}
              value={field.value}
              placeholder={text.summary_field.placeholder}
              name="summary"
              onChange={(e) => field.onChange(e)}
            />
          )}
        />
        <Controller
          name="phoneNumber"
          isClearable
          defaultValue=""
          control={control}
          rules={{
            required: {
              value: true,
              message: text.phoneNumber_field.required_message,
            },
            pattern: {
              value: phoneRegex,
              message: text.phoneNumber_field.pattern_message,
            },
          }}
          render={({ field }) => (
            <Input
              className="request-form__item request-form__item__input"
              type="text"
              label={text.phoneNumber_field.label}
              value={field.value}
              placeholder={text.phoneNumber_field.placeholder}
              displayAsterisk
              name="phoneNumber"
              onChange={(e) => field.onChange(e)}
            />
          )}
        />
        {errors.phoneNumber && <span className="request-form__item__errors">{errors.phoneNumber.message}</span>}
        <Controller
          name="contacts"
          isClearable
          defaultValue=""
          control={control}
          rules={{
            required: {
              value: true,
              message: text.contacts_field.required_message,
            },
            pattern: {
              value: textAreaRegex,
              message: text.contacts_field.pattern_message,
            },
          }}
          render={({ field }) => (
            <Textarea
              className="request-form__item request-form__item__input"
              type="text"
              label={text.contacts_field.label}
              value={field.value}
              placeholder={text.contacts_field.placeholder}
              displayAsterisk
              name="contacts"
              onChange={(e) => field.onChange(e)}
            />
          )}
        />
        {errors.contacts && <span className="request-form__item__errors">{errors.contacts.message}</span>}
        <Button
          id="button-submit"
          className="request-form__submit"
          type="submit"
          title={text.submitButton_title}
        />
      </form>
    </div>
  );
}

export default RequestForm;
