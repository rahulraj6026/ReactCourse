import React from "react"
import Controlgrp from "./Controlgrp"

const Contact = () => (
    <section class="page-section" id="contact">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <form id="contactForm" name="sentMessage" novalidate="novalidate">
                            <Controlgrp title="Name" id="Name"/>
                            <Controlgrp title="Email Address" id="Email Address" />
                            <Controlgrp title="Phone Number" id="Phone Number"/>
                            <br />
                            <div id="success"></div>
                            <div class="form-group">
                                <button class="btn btn-primary btn-xl" id="sendMessageButton" type="submit">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </section>
)

export default Contact