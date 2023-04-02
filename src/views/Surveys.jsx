import { PlusCircleIcon } from '@heroicons/react/24/solid';
import React from 'react'
import TButton from '../components/core/TButton';
import PageComponent from '../components/PageComponent'
import SurveylistItem from '../components/SurveylistItem';
import { useStateContext } from '../context/ContextProvider'

function Surveys() {
  const {surveys} = useStateContext();

  const onDeleteClick = () => {
    console.log("on Delete Click");
  }

  return (
   
    <PageComponent title="Surveys"buttons={
      <TButton color="green" to="/surveys/create">
        <PlusCircleIcon className="h-6 w-6 mr-2" />Create new
        </TButton>
        }
      >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
      {
        surveys.map(survey => (
          <SurveylistItem survey={survey} key={survey.id} onDeleteClick={onDeleteClick}/>
        ))
      }
      </div>
    </PageComponent>
  )
}

export default Surveys