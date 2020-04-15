import React, {Component} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import Logo from './logo.jpg'
import './form.css'
import Axios from 'axios';

class HeroForm extends Component {

    handleSubmit = (values, actions) => {
        const URL = `http://localhost:8000/heroes`
        Axios.post(URL, {
            values
        }).then(response => {
            actions.setSubmitting(false)
            actions.resetForm()
            alert('Succes')
            
        })
    }

    render() {

        return (
            <Formik
                initialValues={{
                fullName: '',
                born: '',
                died: '',
                description: '',
                establishment: '',
                imgUrl: ''
            }}
                validate={(values) => {
                let errors = {};
                if (!values.fullName) {
                    errors.fullName = <small className="form-text text-danger">Name is required</small>;
                    return errors;
                }
                if (!values.establishment) {
                    errors.establishment = <small className="form-text text-danger">establishment is required</small>;
                    return errors;
                }
            }}
                onSubmit={this.handleSubmit}
                render={formProps => {
                return (
                    <Form>
                        <div className="container">
                            <div className="row justify-content-md-center">
                                <div className="col-sm-6">
                                    <div className="card" style={{width: '25rem'}}>
                                    <img src={Logo} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <div className="form-group">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    name="fullName"
                                                    placeholder="Full Name"/>
                                                <ErrorMessage name="fullName"/>
                                            </div>
                                            <div className="form-group">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    name="born"
                                                    placeholder="Born"/>
                                            </div>
                                            <div className="form-group">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    name="died"
                                                    placeholder="Died"/>
                                            </div>
                                            <div className="form-group">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    name="description"
                                                    placeholder="Description"/>
                                            </div>
                                            <div className="form-group">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    name="establishment"
                                                    placeholder="Establishment"/>
                                                <ErrorMessage name="establishment"/>
                                            </div>
                                            <div className="form-group">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    name="imgUrl"
                                                    placeholder="Image URL"/>
                                            </div>
                                            <button
                                                className='btn btn-outline-primary'
                                                type="submit"
                                                disabled={formProps.isSubmitting}>
                                                Add Hero
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                );
            }}/>
        );
    }
}
export default HeroForm