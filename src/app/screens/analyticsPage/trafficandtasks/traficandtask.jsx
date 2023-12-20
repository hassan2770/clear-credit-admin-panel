"use client";
import React, { useState } from "react";
import styles from "./traficandtasks.module.css";
import { SlOptionsVertical } from "react-icons/sl";
import { FaCheckCircle } from "react-icons/fa";
import { MdEdit, MdShare } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import OutsideClickHandler from "react-outside-click-handler";
const Traficandtask = () => {
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [options, setOptions] = useState(false);
  const [options1, setOptions1] = useState(false);
  const [options2, setOptions2] = useState(false);
  const [options3, setOptions3] = useState(false);
  const [options4, setOptions4] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.traffic}>
        <div className={styles.heading}>
          <span>Traffic by Site</span>
        </div>
        <div className={styles.box}>
          <div className={styles.boxes}>
            <div className={styles.socials}>
              <img src="../facebook.png" height={30} />
              <h3>1.95k</h3>
              <span>Facebook</span>
            </div>
            <div className={styles.socials}>
              <img src="../google.png" height={30} />
              <h3>9.12k</h3>
              <span>Google</span>
            </div>
          </div>
          <div className={styles.boxes}>
            <div className={styles.socials}>
              <img src="../linkedin.png" height={30} />
              <h3>6.85k</h3>
              <span>LinkedIn</span>
            </div>
            <div className={styles.socials}>
              <img src="../twitter.png" height={30} />
              <h3>8.43k</h3>
              <span>Twitter</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tasks}>
        <div className={styles.heading1}>
          <span>Tasks</span>
        </div>
        <div className={styles.checklist}>
          <div className={styles.text}>
            <input type="checkbox" onChange={() => setClick((pre) => !pre)} />
            <span className={click && styles.underline}>
              Complete Project Proposal
            </span>
          </div>
          <OutsideClickHandler onOutsideClick={()=>setOptions(false)}>
          {options && (
            <div className={styles.taskoptions}>
              <div>
                <FaCheckCircle />
                <span>Mark Complete</span>
              </div>
              <div>
                <MdEdit />
                <span>Edit</span>
              </div>
              <div>
                <MdShare />
                <span>Share</span>
              </div>
              <div>
                <RiDeleteBin5Fill />
                <span>Delete</span>
              </div>
            </div>
          )}</OutsideClickHandler>
          <SlOptionsVertical
            className={styles.dots}
            onClick={() => setOptions(pre=>!pre)}
          />
        </div>
        <div className={styles.checklist}>
          <div className={styles.text}>
            <input type="checkbox" onChange={() => setClick1((pre) => !pre)} />
            <span className={click1 && styles.underline}>
              Conduct Market Research
            </span>
          </div>
          <OutsideClickHandler onOutsideClick={()=>setOptions1(false)}>
          {options1 && (
            <div className={styles.taskoptions}>
              <div>
                <FaCheckCircle />
                <span>Mark Complete</span>
              </div>
              <div>
                <MdEdit />
                <span>Edit</span>
              </div>
              <div>
                <MdShare />
                <span>Share</span>
              </div>
              <div>
                <RiDeleteBin5Fill />
                <span>Delete</span>
              </div>
            </div>
          )}</OutsideClickHandler>
          <SlOptionsVertical
            className={styles.dots}
            onClick={() => setOptions1((pre) => !pre)}
          />
        </div>
        <div className={styles.checklist}>
          <div className={styles.text}>
            <input type="checkbox" onChange={() => setClick2((pre) => !pre)} />
            <span className={click2 && styles.underline}>
              Design User Interface Mockups
            </span>
          </div>
          <OutsideClickHandler onOutsideClick={()=>setOptions2(false)}>
          {options2 && (
            <div className={styles.taskoptions2}>
              <div>
                <FaCheckCircle />
                <span>Mark Complete</span>
              </div>
              <div>
                <MdEdit />
                <span>Edit</span>
              </div>
              <div>
                <MdShare />
                <span>Share</span>
              </div>
              <div>
                <RiDeleteBin5Fill />
                <span>Delete</span>
              </div>
            </div>
          )}</OutsideClickHandler>
          <SlOptionsVertical
            className={styles.dots}
            onClick={() => setOptions2((pre) => !pre)}
          />
        </div>
        <div className={styles.checklist}>
          <div className={styles.text}>
            <input type="checkbox" onChange={() => setClick3((pre) => !pre)} />
            <span className={click3 && styles.underline}>
              Develop Backend API
            </span>
          </div>
          <OutsideClickHandler onOutsideClick={()=>setOptions3(false)}>
          {options3 && (
            <div className={styles.taskoptions3}>
              <div>
                <FaCheckCircle />
                <span>Mark Complete</span>
              </div>
              <div>
                <MdEdit />
                <span>Edit</span>
              </div>
              <div>
                <MdShare />
                <span>Share</span>
              </div>
              <div>
                <RiDeleteBin5Fill />
                <span>Delete</span>
              </div>
            </div>
          )}</OutsideClickHandler>
          <SlOptionsVertical
            className={styles.dots}
            onClick={() => setOptions3((pre) => !pre)}
          />
        </div>
        <div className={styles.checklist}>
          <div className={styles.text}>
            <input type="checkbox" onChange={() => setClick4((pre) => !pre)} />
            <span className={click4 && styles.underline}>
              Implement Authentication System
            </span>
          </div>
          <OutsideClickHandler onOutsideClick={()=>setOptions4(false)}>
          {options4 && (
            <div className={styles.taskoptions4}>
              <div>
                <FaCheckCircle />
                <span>Mark Complete</span>
              </div>
              <div>
                <MdEdit />
                <span>Edit</span>
              </div>
              <div>
                <MdShare />
                <span>Share</span>
              </div>
              <div>
                <RiDeleteBin5Fill />
                <span>Delete</span>
              </div>
            </div>
          )}</OutsideClickHandler>
          <SlOptionsVertical
            className={styles.dots}
            onClick={() => setOptions4((pre) => !pre)}
          />
        </div>
      </div>
    </div>
  );
};

export default Traficandtask;
