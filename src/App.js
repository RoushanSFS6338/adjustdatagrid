import React, { useState, useEffect } from "react";
import { Form, FormBuilder } from "react-formio";
import "./App.css";

let element;
let x = 0;
let y = 0;


let w = 0;

export default function App() {
  const [form, setForm] = useState({
    display: "form",
    components: [
      {
        label: "Data Grid",
        labelPosition: "top",
        description: "",
        tooltip: "",
        disableAddingRemovingRows: false,
        reorder: false,
        addAnother: "",
        addAnotherPosition: "bottom",
        defaultOpen: false,
        layoutFixed: false,
        enableRowGroups: false,
        customClass: "",
        tabindex: "",
        hidden: false,
        hideLabel: false,
        autofocus: false,
        disabled: false,
        tableView: false,
        modalEdit: false,
        defaultValue: Array(1),
        persistent: true,
        protected: false,
        dbIndex: false,
        encrypted: false,
        redrawOn: "",
        clearOnHide: true,
        customDefaultValue: "",
        calculateValue: "",
        calculateServer: false,
        allowCalculateOverride: false,
        validateOn: "change",
        validate: Object,
        unique: false,
        errorLabel: "",
        key: "dataGrid",
        tags: Array(0),
        properties: Object,
        conditional: Object,
        customConditional: "",
        logic: Array(0),
        attributes: Object,
        overlay: Object,
        type: "datagrid",
        input: true,
        placeholder: "",
        prefix: "",
        suffix: "",
        multiple: false,
        refreshOn: "",
        widget: null,
        showCharCount: false,
        showWordCount: false,
        allowMultipleMasks: false,
        tree: true,
        components: [
          {
            label: "Text Field",
            labelPosition: "top",
            placeholder: "",
            description: "",
            tooltip: "",
            prefix: "",
            suffix: "",
            widget: Object,
            inputMask: "",
            allowMultipleMasks: false,
            customClass: "",
            tabindex: "",
            hidden: false,
            hideLabel: false,
            showWordCount: false,
            showCharCount: false,
            mask: false,
            autofocus: false,
            spellcheck: true,
            disabled: false,
            tableView: true,
            modalEdit: false,
            multiple: false,
            persistent: true,
            inputFormat: "plain",
            protected: false,
            dbIndex: false,
            case: "",
            encrypted: false,
            redrawOn: "",
            clearOnHide: true,
            customDefaultValue: "",
            calculateValue: "",
            calculateServer: false,
            allowCalculateOverride: false,
            validateOn: "change",
            validate: Object,
            unique: false,
            errorLabel: "",
            key: "textField",
            tags: Array(0),
            properties: Object,
            conditional: Object,
            customConditional: "",
            logic: Array(0),
            attributes: Object,
            overlay: Object,
            type: "textfield",
            input: true,
            refreshOn: "",
            inputType: "text",
            id: "ei5qns",
            defaultValue: null
          },
          {
            label: "Text Field",
            labelPosition: "top",
            placeholder: "",
            description: "",
            tooltip: "",
            prefix: "",
            suffix: "",
            widget: Object,
            inputMask: "",
            allowMultipleMasks: false,
            customClass: "",
            tabindex: "",
            hidden: false,
            hideLabel: false,
            showWordCount: false,
            showCharCount: false,
            mask: false,
            autofocus: false,
            spellcheck: true,
            disabled: false,
            tableView: true,
            modalEdit: false,
            multiple: false,
            persistent: true,
            inputFormat: "plain",
            protected: false,
            dbIndex: false,
            case: "",
            encrypted: false,
            redrawOn: "",
            clearOnHide: true,
            customDefaultValue: "",
            calculateValue: "",
            calculateServer: false,
            allowCalculateOverride: false,
            validateOn: "change",
            validate: Object,
            unique: false,
            errorLabel: "",
            key: "textField1",
            tags: Array(0),
            properties: Object,
            conditional: Object,
            customConditional: "",
            logic: Array(0),
            attributes: Object,
            overlay: Object,
            type: "textfield",
            input: true,
            refreshOn: "",
            inputType: "text",
            id: "e17yst",
            defaultValue: null
          },
          {
            label: "Text Field",
            labelPosition: "top",
            placeholder: "",
            description: "",
            tooltip: "",
            prefix: "",
            suffix: "",
            widget: Object,
            inputMask: "",
            allowMultipleMasks: false,
            customClass: "",
            tabindex: "",
            hidden: false,
            hideLabel: false,
            showWordCount: false,
            showCharCount: false,
            mask: false,
            autofocus: false,
            spellcheck: true,
            disabled: false,
            tableView: true,
            modalEdit: false,
            multiple: false,
            persistent: true,
            inputFormat: "plain",
            protected: false,
            dbIndex: false,
            case: "",
            encrypted: false,
            redrawOn: "",
            clearOnHide: true,
            customDefaultValue: "",
            calculateValue: "",
            calculateServer: false,
            allowCalculateOverride: false,
            validateOn: "change",
            validate: Object,
            unique: false,
            errorLabel: "",
            key: "textField2",
            tags: Array(0),
            properties: Object,
            conditional: Object,
            customConditional: "",
            logic: Array(0),
            attributes: Object,
            overlay: Object,
            type: "textfield",
            input: true,
            refreshOn: "",
            inputType: "text",
            id: "enz5thw",
            defaultValue: null,
            id: "ef10qg"
          }
        ]
      },

      {
        type: "button",
        label: "Submit",
        key: "submit",
        size: "md",
        block: false,
        action: "submit",
        disableOnInvalid: true,
        theme: "primary",
        input: true,
        placeholder: "",
        prefix: "",
        customClass: "",
        suffix: "",
        multiple: false,
        defaultValue: null,
        protected: false,
        unique: false,
        persistent: false,
        hidden: false,
        clearOnHide: true,
        refreshOn: "",
        redrawOn: "",
        tableView: false,
        modalEdit: false,
        labelPosition: "top",
        description: "",
        errorLabel: "",
        tooltip: "",
        hideLabel: false,
        tabindex: "",
        disabled: false,
        autofocus: false,
        dbIndex: false,
        customDefaultValue: "",
        calculateValue: "",
        widget: Object,
        attributes: Object,
        validateOn: "change",
        validate: Object,
        conditional: Object,
        overlay: Object,
        allowCalculateOverride: false,
        encrypted: false,
        showCharCount: false,
        showWordCount: false,
        properties: Object,
        allowMultipleMasks: false,
        leftIcon: "",
        rightIcon: "",
        dataGridLabel: true,
        id: "elbx4ta"
      }
    ]
  });

  useEffect(() => {
    let ele = document.querySelectorAll(".datagrid-table thead tr");
    console.log("ele", ele);

    let row = Array.from(ele);
    console.log("row", row[1]);
    let row1 = row[1].querySelectorAll("th");
    console.log(row1, "row1");
    console.log("row1", Array.from(row1));

    let allcol = Array.from(row1);

    for (let i = 0; i < allcol.length; i++) {
      element=allcol[i];
      allcol[i].setAttribute("class", ` adjusthead adjusthead-${i}`);
      const styles=window.getComputedStyle(element)
      allcol[i].addEventListener("mousedown",function(e){

        e.preventDefault();
        console.log(e,"e")
        x = e.clientX;
        y = e.clientY;
        console.log("xy", x, y);
        
        w = parseInt(styles.width, 10);
      
        document.addEventListener('mousemove', mouseMoveHandler);
        
    document.addEventListener('mouseup', mouseUpHandler);
      });
    }
  });

 
  
  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - x;
       console.log("dx",dx)
       console.log("width",w)
    // Adjust the dimension of element;
    console.log("element dimension",element)
    element.style.width = `${w + dx}px`;
    console.log("totalwidth",w)
};

const mouseUpHandler = function () {
  // Remove the handlers of `mousemove` and `mouseup`
  document.removeEventListener('mousemove', mouseMoveHandler);
  document.removeEventListener('mouseup', mouseUpHandler);
};





  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <FormBuilder
        key={"4a68890c-e59a-4b1a-ad5c-69a0ee7a92cc"} // unique id
        form={form}
        onChange={(schema) => setForm({ ...schema })}
      />

      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
        crossOrigin="anonymous"
      ></link>
      <link
        rel="stylesheet"
        href="https://unpkg.com/formiojs@latest/dist/formio.full.min.css"
      />
      <Form
        options={{ readOnly: false }}
        form={form}
        onChange={(schema) => {}}
        onSubmit={() => {}}
        submission={{ data: {} }}
        onRender={() => {
          console.log("render finished");
        }}
      />
    </div>
  );
}
