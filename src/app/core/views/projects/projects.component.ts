import { Component } from '@angular/core';
import {Project} from "../../types/projects";
import {projects} from "../../utils/Consts";
import {EnlargeImageUtils} from "../../utils/EnlargeImageUtils";
import {ProjectTag} from "../../enums/project-tag";
import {TechnologyTag} from "../../enums/technology-tag";

@Component({
  selector: 'view-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  selectedTag = "All"
  technologyTag = "All"
  projects = projects

  public get allTags(): string[] {
    let tags: string[] = [];
    this.projects.forEach(project => {
      project.tags.forEach(tag => {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
    });
    tags.sort((a, b) => a.localeCompare(b));
    return tags;
  }

  public get allTechnologies(): string[] {
    let technologies: string[] = [];
    this.projects.forEach(project => {
      project.technologies.forEach(technology => {
        if (!technologies.includes(technology)) {
          technologies.push(technology);
        }
      });
    });
    technologies.sort((a, b) => a.localeCompare(b));
    return technologies;
  }

  public changedTag(event: any) {
    this.selectedTag = event.target.value;
  }

  public changedTechnology(event: any) {
    this.technologyTag = event.target.value;
  }

  public changeTag(tag: string) {
    this.selectedTag = tag;
    let select = document.getElementById("select")
    if (select instanceof HTMLSelectElement) {
      select.value = tag;
    }
  }

  public changeTechnology(tag: string) {
    this.technologyTag = tag;
    let select = document.getElementById("select-technology")
    if (select instanceof HTMLSelectElement) {
      select.value = tag;
    }
  }

  public containsTag(project: Project): boolean {
    if (this.selectedTag === "All" && this.technologyTag === "All") {
      return true;
    }

    if (this.selectedTag === "All") {
      return project.technologies.includes(<TechnologyTag>this.technologyTag);
    }

    if (this.technologyTag === "All") {
      return project.tags.includes(<ProjectTag>this.selectedTag);
    }

    return project.tags.includes(<ProjectTag>this.selectedTag) && project.technologies.includes(<TechnologyTag>this.technologyTag);
  }

  public enlargeImage(src: string) {
    EnlargeImageUtils.enlargeImage(src);
  }

  public resetFilter() {
    this.selectedTag = "All";
    this.technologyTag = "All";
    let select = document.getElementById("select")
    if (select instanceof HTMLSelectElement) {
      select.value = "All";
    }
    let selectTechnology = document.getElementById("select-technology")
    if (selectTechnology instanceof HTMLSelectElement) {
      selectTechnology.value = "All";
    }
  }
}
