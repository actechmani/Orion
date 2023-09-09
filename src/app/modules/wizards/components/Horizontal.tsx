import React, { FC, useEffect, useRef, useState } from 'react'
import { Step1 } from './steps/Step1'
import { Step2 } from './steps/Step2'
import { Step3 } from './steps/Step3'
import { Step4 } from './steps/Step4'
import { Step5 } from './steps/Step5'
import { KTIcon } from '../../../../_metronic/helpers'
import { StepperComponent } from '../../../../_metronic/assets/ts/components'
import { Form, Formik, FormikValues } from 'formik'
import { ICreateAccount, inits } from './CreateAccountWizardHelper'
import { useNavigate } from 'react-router-dom'

const Horizontal: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [initValues] = useState<ICreateAccount>(inits)
  const [isSubmitButton, setSubmitButton] = useState(false)
  const navigate = useNavigate()
  console.log("initValues", initValues)
  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    stepper.current.goPrev()


    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totalStepsNumber)
  }

  const submitStep = (values: ICreateAccount, actions: FormikValues) => {
    if (stepper.current?.currentStepIndex === stepper.current?.totalStepsNumber) {
      navigate('/')
    }
    if (!stepper.current) {
      return
    }

    if (stepper.current.currentStepIndex !== stepper.current.totalStepsNumber) {
      stepper.current.goNext()
    } else {
      stepper.current.goto(1)
      actions.resetForm()
    }

    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totalStepsNumber)

  }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])

  return (
    <div className='container-fluid'>
      <div >
        <div >
          <div
            ref={stepperRef}
            className='stepper stepper-links d-flex flex-column pt-15'
            id='kt_create_account_stepper'
          >
            <div className='stepper-nav mb-5'>


              <div className='stepper-item' data-kt-stepper-element='nav'>
                <h3 className='stepper-title'>Choose Team</h3>
              </div>

              <div className='stepper-item' data-kt-stepper-element='nav'>
                <h3 className='stepper-title'>Planning</h3>
              </div>



              <div className='stepper-item' data-kt-stepper-element='nav'>
                <h3 className='stepper-title'>Completed</h3>
              </div>
            </div>

            <Formik initialValues={initValues} onSubmit={submitStep}>
              {() => (
                <Form className='mx-auto mw-600px w-100 pt-15 pb-10' id='kt_create_account_form'>

                  <div className='current' data-kt-stepper-element='content'>
                    <Step2 />
                  </div>

                  <div data-kt-stepper-element='content'>
                    <Step3 />
                  </div>



                  <div data-kt-stepper-element='content'>
                    <Step5 />
                  </div>

                  <div className='d-flex flex-stack pt-15'>
                    <div className='mr-2'>
                      <button
                        onClick={prevStep}
                        type='button'
                        className='btn btn-lg btn-light-primary me-3'
                        data-kt-stepper-action='previous'
                      >
                        <KTIcon iconName='arrow-left' className='fs-4 me-1' />
                        Back
                      </button>
                    </div>

                    <div>
                      <button type='submit' className='btn btn-lg btn-primary me-3'>
                        <span className='indicator-label'>
                          {!isSubmitButton && 'Continue'}
                          {isSubmitButton && 'Submit'}
                          <KTIcon iconName='arrow-right' className='fs-3 ms-2 me-0' />
                        </span>
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div></div>
  )
}

export { Horizontal }
