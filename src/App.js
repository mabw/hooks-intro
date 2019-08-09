import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import BasicState from "./useState/BasicState";
import MultiStates from "./useState/MultiStates";
import ObjectState from "./useState/ObjectState";
import InitialState from "./useState/InitialState";
import SameState from "./useState/SameState";
import PrevState from './useRef/PrevState';

import DidEffect from "./useEffect/DidEffect";
import UpdateEffect from "./useEffect/UpdateEffect";
import ConditionEffect from "./useEffect/ConditionEffect";
import ConditionEffectFromProps from "./useEffect/ConditionEffectFromProps";
import UnmountEffect from "./useEffect/UnmountEffect";
import MultiEffects from "./useEffect/MultiEffects";

import BasicContext from "./useContext/BasicContext";
import PropFuncContext from "./useContext/PropFuncContext";

import BasicReducer from './useReducer/BasicReducer';
import InitReducer from './useReducer/InitReducer';
import SameReducer from './useReducer/SameReducer';

import BasicCallback from "./useMemo/BasicCallback";

import BasicRef from "./useRef/BasicRef";
import StaticValueWithRef from "./useRef/StaticValueWithRef";
import MeasureDOM from "./useRef/MeasureDom";

import HOCStepOne from "./customHooks/hoc/StepOne";
import HOCStepTwo from "./customHooks/hoc/StepTwo";

import RenderPropsStepOne from './customHooks/renderProps/StepOne';
import RenderPropsStepTwo from './customHooks/renderProps/StepTwo';

import HooksStepOne from './customHooks/hooks/StepOne';
import HooksStepTwo from './customHooks/hooks/StepTwo';

import AwesomeHooks from './customHooks/awesomeHooks';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: "row" }}>
        <ul style={{ marginRight: 100 }}>
          <li>
            <p>useState demo</p>
            <ul>
              <li>
                <Link to="/use-state/basic-state">basic state demo</Link>
              </li>
              <li>
                <Link to="/use-state/multi-state">multi state demo</Link>
              </li>
              <li>
                <Link to="/use-state/object-state">object state demo</Link>
              </li>
              <li>
                <Link to="/use-state/initial-state">initial state demo</Link>
              </li>
              <li>
                <Link to="/use-state/same-state">same state demo</Link>
              </li>
            </ul>
          </li>
          <li>
            <p>useEffect demo</p>
            <ul>
              <li>
                <Link to="/use-effect/did-effect">did effect demo</Link>
              </li>
              <li>
                <Link to="/use-effect/update-effect">update effect demo</Link>
              </li>
              <li>
                <Link to="/use-effect/condition-effect">
                  condition effect demo
                </Link>
              </li>
              <li>
                <Link to="/use-effect/condition-effect-from-props">
                  condition effect from props demo
                </Link>
              </li>
              <li>
                <Link to="/use-effect/unmount-effect">unmount effect demo</Link>
              </li>
              <li>
                <Link to="/use-effect/multi-effects">multi effects demo</Link>
              </li>
            </ul>
          </li>

          <li>
            <p>useContext demo</p>
            <ul>
              <li>
                <Link to="/use-context/basic-context">basic context demo</Link>
              </li>
              <li>
                <Link to="/use-context/prop-func-context">
                  prop function context demo
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <p>useReducer demo</p>
            <ul>
              <li>
                <Link to="/use-reducer/basic-reducer">basic reducer demo</Link>
              </li>
              <li>
                <Link to="/use-reducer/init-reducer">
                  initial reducer demo
                </Link>
              </li>
              <li>
                <Link to="/use-reducer/same-reducer">
                  same reducer demo
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <p>useCallback demo</p>
            <ul>
              <li>
                <Link to="/use-memo/basic-callback">basic callback demo</Link>
              </li>
            </ul>
          </li>
          <li>
            <p>useRef demo</p>
            <ul>
              <li>
                <Link to="/use-ref/basic-ref">basic ref demo</Link>
              </li>
              <li>
                <Link to="/use-ref/static-value-with-ref">static value with ref demo</Link>
              </li>
              <li>
                <Link to="/use-ref/previous-state">previous state demo</Link>
              </li>
              <li>
                <Link to="/use-ref/measure-dom">measure dom demo</Link>
              </li>
            </ul>
          </li>
          <li>
            <p>custom hooks demo</p>
            <ul>
              <li>
                <Link to="/custom-hooks/hoc/step-one">HOC demo</Link>
              </li>
              <li>
                <Link to="/custom-hooks/render-props/step-one">Render props demo</Link>
              </li>
              <li>
                <Link to="/custom-hooks/hooks/step-one">Basic custom hooks demo</Link>
              </li>
              <li>
                <Link to="/custom-hooks/awesome-hooks">AwesomeHooks demo</Link>
              </li>
            </ul>
          </li>
        </ul>
        <Switch>
          <Route path="/use-state/basic-state" component={BasicState} />
          <Route path="/use-state/multi-state" component={MultiStates} />
          <Route path="/use-state/object-state" component={ObjectState} />
          <Route path="/use-state/initial-state" component={InitialState} />
          <Route path="/use-state/same-state" component={SameState} />
          <Route path="/use-effect/did-effect" component={DidEffect} />
          <Route path="/use-effect/update-effect" component={UpdateEffect} />
          <Route
            path="/use-effect/condition-effect"
            component={ConditionEffect}
          />
          <Route
            path="/use-effect/condition-effect-from-props"
            component={ConditionEffectFromProps}
          />
          <Route path="/use-effect/unmount-effect" component={UnmountEffect} />
          <Route path="/use-effect/multi-effects" component={MultiEffects} />
          <Route path="/use-context/basic-context" component={BasicContext} />
          <Route
            path="/use-context/prop-func-context"
            component={PropFuncContext}
          />
          <Route path="/use-reducer/basic-reducer" component={BasicReducer} />
          <Route path="/use-reducer/init-reducer" component={InitReducer} />
          <Route path="/use-reducer/same-reducer" component={SameReducer} />
          <Route path="/use-memo/basic-callback" component={BasicCallback} />
          <Route path="/use-ref/basic-ref" component={BasicRef} />
          <Route path="/use-ref/static-value-with-ref" component={StaticValueWithRef} />
          <Route path="/use-ref/previous-state" component={PrevState} />
          <Route path="/use-ref/measure-dom" component={MeasureDOM} />
          <Route path="/custom-hooks/hoc/step-one" component={HOCStepOne} />
          <Route path="/custom-hooks/hoc/step-two" component={HOCStepTwo} />
          <Route path="/custom-hooks/render-props/step-one" component={RenderPropsStepOne} />
          <Route path="/custom-hooks/render-props/step-two" component={RenderPropsStepTwo} />
          <Route path="/custom-hooks/hooks/step-one" component={HooksStepOne} />
          <Route path="/custom-hooks/hooks/step-two" component={HooksStepTwo} />
          <Route path="/custom-hooks/awesome-hooks" component={AwesomeHooks} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
