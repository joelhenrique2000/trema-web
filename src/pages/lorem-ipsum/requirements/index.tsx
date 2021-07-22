import axios from 'axios';
import { format, isToday } from 'date-fns';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from '../../../components/organisms/Header'

const Page = ({ data }) => {

  const [requirements, setRequirements] = useState([]);

  useEffect(() => {
    axios.get("/api/requirements")
      .then((res) => res.data)
      .then((json) => {
        setRequirements(json.requirements)
      })
  }, [])

  return (
    <div className="requirements">
      <Header />
      <div className="requirements__container">
        <div className="sidebar-requirements">
          <div className="sidebar-requirements__container">
            <div className="sidebar-requirements__types">

            </div>
            <div className="sidebar-requirements__list">
              <ul className="requirement-list">
                {Array(70).fill(0).map(() => {
                  return (
                    <li className="requirement-list__item">
                      Lorem ipsum dolor
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="all-requirements-card">
          <div className="all-requirements-card__container">
            <ul className="requirements-card-list">
              {requirements.map((value, index) => {
                return (
                  <li className="requirements-card-list__item">
                    <div className="requirements-card">
                      <div className="requirements-card__check">
                        <div className="form-check">
                          <input type="checkbox" className="form-check__checkbox" id="keep-logged-in" />
                        </div>
                      </div>
                      <div className="requirements-card__content">
                        <div className="requirements-card__ref">{`${index+1}.`}</div>
                        <div className="requirements-card__title">{`${value.description}`}</div>
                      </div>
                      <div className="requirements-card__date">{isToday(new Date(value.date)) ? 'Hoje' : format(new Date(value.date), "dd/MM/yyyy à's' HH:mm")}</div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page