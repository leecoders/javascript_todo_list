import { Header } from "../../components/Header/Header.js";
import { SectionForAdmin } from "../../components/SectionForAdmin/SectionForAdmin.js";
import { $ } from "../../utils/util.js";

const header = new Header($("header"), "admin");
const sectionForAdmin = new SectionForAdmin($("section"));
