import React, { Component } from "react";
import Iphonex from "./iphonex";
import Iphone8 from "./iphone8";
import Iphone8plus from "./iphone8plus";
import Iphone5s from "./iphone5s";
import Iphone5c from "./iphone5c";
import Iphone4s from "./iphone4s";
import Ipad from "./ipad";
import Macbookpro from "./macbookpro";
import Nexus5 from "./nexus5";
import Galaxys5 from "./galaxys5";
import Galaxynote8 from "./galaxynote8";
import Htcone from "./htcone";
import Lumia920 from "./lumia920";

export default class Device extends Component {
  getDevice(type) {
    const orientation = this.props.landscape ?  "landscape" :  "";

    const iphonex = (
      <Iphonex
        color={this.props.color}
        orientation={orientation}
        site={this.props.url}
        {...this.props}
      />
    );
    const iphone8 = (
      <Iphone8
        color={this.props.color}
        orientation={orientation}
        site={this.props.url}
        {...this.props}
      />
    );
    const iphone8plus = (
      <Iphone8plus
        color={this.props.color}
        orientation={orientation}
        site={this.props.url}
        {...this.props}
      />
    );
    const iphone5s = (
      <Iphone5s
        color={this.props.color}
        orientation={orientation}
        site={this.props.url}
        {...this.props}
      />
    );
    const iphone5c = (
      <Iphone5c
        color={this.props.color}
        orientation={orientation}
        site={this.props.url}
        {...this.props}
      />
    );
    const iphone4s = (
      <Iphone4s
        color={this.props.color}
        orientation={orientation}
        site={this.props.url}
        {...this.props}
      />
    );
    const ipad = (
      <Ipad
        color={this.props.color}
        orientation={orientation}
        site={this.props.url}
        {...this.props}
      />
    );
    const macbookpro = (
      <Macbookpro
        color={this.props.color}
        orientation={orientation}
        site={this.props.url}
        {...this.props}
      />
    );
    const htcone = (
      <Htcone
        color={this.props.color}
        orientation={orientation}
        site={this.props.url}
        {...this.props}
      />
    );
    const nexus5 = (
      <Nexus5
        color={this.props.color}
        orientation={orientation}
        site={this.props.url}
        {...this.props}
      />
    );
    const lumia920 = (
      <Lumia920
        color={this.props.color}
        orientation={orientation}
        site={this.props.url}
        {...this.props}
      />
    );
    const galaxys5 = (
      <Galaxys5
        color={this.props.color}
        orientation={orientation}
        site={this.props.url}
        {...this.props}
      />
    );
    const galaxynote8 = (
      <Galaxynote8
        color={this.props.color}
        orientation={orientation}
        site={this.props.url}
        {...this.props}
      />
    );

    if (type === "iphone-x") {
      return iphonex;
    } else if (type === "iphone-8") {
      return iphone8;
    } else if (type === "iphone-8plus") {
      return iphone8plus;
    } else if (type === "iphone-5s") {
      return iphone5s;
    } else if (type === "iphone-5c") {
      return iphone5c;
    } else if (type === "iphone-4s") {
      return iphone4s;
    } else if (type === "ipad-mini") {
      return ipad;
    } else if (type === "macbook-pro") {
      return macbookpro;
    } else if (type === "htc-one") {
      return htcone;
    } else if (type === "lumia-920") {
      return lumia920;
    } else if (type === "nexus-5") {
      return nexus5;
    } else if (type === "galaxy-s5") {
      return galaxys5;
    } else if (type === "galaxy-note8") {
      return galaxynote8;
    }
  }

  render() {
    const device = this.getDevice(this.props.name);

    return device;
  }
}

export const DeviceNames = [
  'iphone-x',
  'iphone-8',
  'iphone-8plus',
  'iphone-5s',
  'iphone-5c',
  'iphone-4s',
  'macbook-pro',
  'htc-one',
  'lumia-920',
  'nexus-5',
  'galaxy-s5',
  'galaxy-note8',
];
