import React, { Component } from 'react';
import enhanceForm from './enhanceForm';

export const TweetForm = ({ state, handleSubmit, handleChange }) =>
    (<form onSubmit={handleSubmit}>
        <label>
            Chirp:
          <input
                type="text"
                name="text"
                value={state.text}
                onChange={handleChange}
            />
        </label>
        <br />
        <label>
            Image Url:
          <input
                type="text"
                name="url"
                value={state.url}
                onChange={handleChange}
            />
        </label>
        <br />
        <button>Submit</button>
    </form>)


const EnhancedForm = enhanceForm(TweetForm);

export default EnhancedForm;