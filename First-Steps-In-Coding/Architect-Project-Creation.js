function architectProject(arg1, arg2) {
    let name = arg1;
    let project_count = Number(arg2);
    let project_hours = project_count * 3;
    console.log(`The architect ${name} will need ${project_hours} hours to complete ${project_count} project/s.`);
}