import React from 'react';

const Controlgrp = ({title, id}) => {
    return(
        <div class="control-group">
            <div class="form-group floating-label-form-group controls mb-0 pb-2">
                <label>{title}</label><input class="form-control" id={id} type="text" placeholder={title} required="required" data-validation-required-message='Please enter your {title}' />
                <p class="help-block text-danger"></p>
            </div>
        </div>
    )
}

export default Controlgrp