import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import fetchLocations from 'store/locations/utils';
import fetchFormPractice from 'store/formPractice/utils';
import Button from 'components/controls/Button/Button';
import Input from 'components/controls/Input/Input';
import Select from 'components/controls/Select/Select';
import './PracticeForm.scss';

const PracticeForm = () => {
  const dispatch = useDispatch();
  const { locations } = useSelector((state) => state.locations);
  useEffect(() => {
    dispatch(fetchLocations());
  }, []);

  const defaultPracticeFormValues = {
    title: '',
    startDate: null,
    endDate: null,
    location: {
      id: 1,
      name: 'Saratov',
    },
    status: '',
  };

  const {
    handleSubmit, control, setValue, reset, formState: { errors },
  } = useForm({ defaultPracticeFormValues });

  function handleChangeSelect(e) {
    const { selectedIndex } = e.currentTarget.options;
    setValue('location', locations[selectedIndex]);
  }

  const onSubmit = (data) => {
    console.log(data);
    dispatch(fetchFormPractice(data));
    reset();
  };

  return (
    <div id="practice-id" className="practice-form">
      <form onSubmit={handleSubmit((data) => onSubmit(data))} id="practiceForm" className="practice-form__body">
        <Controller
          name="title"
          isClearable
          defaultValue=""
          control={control}
          rules={{ required: false }}
          render={({ field }) => (
            <Input
              className="practice-form__item practice-form__item__input"
              type="text"
              label="Title"
              value={field.value}
              placeholder="Title"
              displayAsterisk
              name="title"
              onChange={(e) => field.onChange(e)}
            />
          )}
        />
        <div className="practice-form__section">
          <Controller
            name="startDate"
            isClearable
            defaultValue=""
            control={control}
            rules={{ required: false }}
            render={({ field }) => (
              <Input
                className="practice-form__item practice-form__item__input practice-form__start-date"
                type="date"
                label="Start date"
                value={field.value}
                placeholder="StartDate"
                displayAsterisk
                name="startDate"
                onChange={(e) => field.onChange(e)}
              />
            )}
          />
          <Controller
            name="endDate"
            isClearable
            defaultValue=""
            control={control}
            rules={{ required: false }}
            render={({ field }) => (
              <Input
                className="practice-form__item practice-form__item__input"
                type="date"
                label="End date"
                value={field.value}
                placeholder="End date"
                displayAsterisk
                name="endDate"
                onChange={(e) => field.onChange(e)}
              />
            )}
          />
        </div>
        <div className="practice-form__section">
          <Controller
            name="location"
            isClearable
            defaultValue={defaultPracticeFormValues.location}
            control={control}
            rules={{ required: false }}
            render={({ field }) => (
              <Select
                className="practice-form__item practice-form__item__input practice-form__location"
                label="Location"
                options={locations}
                value={field.value?.name}
                name="location"
                displayAsterisk
                onChange={handleChangeSelect}
              />
            )}
          />
          {errors.location && <span className="practice-form__item__errors">{errors.location.message}</span>}
          <Controller
            name="status"
            isClearable
            defaultValue=""
            control={control}
            rules={{ required: false }}
            render={({ field }) => (
              <Input
                className="practice-form__item practice-form__item__input"
                type="text"
                label="Status"
                value={field.value}
                placeholder="Status"
                displayAsterisk
                name="status"
                onChange={(e) => field.onChange(e)}
              />
            )}
          />
        </div>
        {errors.status && <span className="practice-form__item__errors">{errors.status.message}</span>}
        <Button
          id="button-submit"
          className="practice-form__submit"
          type="submit"
          title="Send"
        />
      </form>
    </div>
  );
};

export default PracticeForm;
