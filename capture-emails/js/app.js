

/// email-modal--visible 

window.onload = function() { 
    let emailState = false;
    let emailModal = this.document.getElementsByClassName("email-modal")[0];
    let closeButton = this.document.getElementsByClassName("email-modal__close-btn")[0];
    let emailInput = this.document.getElementsByClassName('email-modal__input')[0];
    let emailButton = this.document.getElementsByClassName('email-modal__button')[0];
    let thankContainer = this.document.getElementsByClassName('email-thank')[0]; 
    let notInterested = this.document.getElementsByClassName('email-modal__decline-offer')[0];


    let showThankMessage = () => { 
        thankContainer.classList.add("email-thank--success");
        this.setTimeout (() => { 
            closeModal();
        }, 3000)
    };

    let removeErrors = () => { 

        this.document.getElementsByClassName
        ('email-modal__form-group')[0].classList.remove
        ('email-modal__form-group--error'); 

        this.document.getElementsByClassName
        ('email-modal__error-message')[0].classList.remove
        ('email-modal__error-message--active');

    } 

    let addErrors = () => { 

        this.document.getElementsByClassName
        ('email-modal__form-group')[0].classList.add
        ('email-modal__form-group--error'); 

        this.document.getElementsByClassName
        ('email-modal__error-message')[0].classList.add
        ('email-modal__error-message--active');

    }

    let closeModal = () =>{ 
        emailModal.classList.remove('email-modal--visible');
    }
    
    let showModal = () => { 
        if (emailState == false) { 
            emailModal.classList.add('email-modal--visible');
            emailState = true;
            }
    }; 

    function emailsValid (email) { 
        return /\S+@\S+\.\S+/.test(email);
    }

    emailButton.addEventListener('click', () => { 
        if (emailsValid(emailInput.value)){ 
            showThankMessage();
        }else {
            addErrors();
            }
    });

    notInterested.addEventListener('click', () => { 
        closeModal();
    })

    emailInput.addEventListener('click', () => { 
        removeErrors();
    })

    closeButton.addEventListener('click', () => { 
        closeModal();
    }); 
   
   
        document.body.addEventListener('mouseleave', () => { 
            showModal();
             });
    

    
}