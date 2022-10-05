/*
 * @Author: wmy
 * @Date: 2022-02-19 21:56:07
 * @LastEditTime: 2022-05-02 21:39:34
 * @LastEditors: wmy
 * @Description: 功能描述
 */

import { useState, useEffect } from 'react';
import UnlogginLayout from 'components/layouts/UnlogginLayout';

interface IProps {
  propName: string;
}

const About = (props: IProps) => {
  const { propName } = props;

  const [state, setState] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {};

  return <div>About</div>;
};

About.layout = UnlogginLayout;

export default About;
