import React from 'react';

import './index.css';
import {rerenderEntireTree} from "./redux/render";
import state from "./redux/state";


rerenderEntireTree(state)

