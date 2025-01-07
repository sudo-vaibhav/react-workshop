import React, { Component } from 'react';
// this is an OLDDDDDD way of doing things
class SkillsList extends Component {
    render() {
        const { proficiency } = this.props;
        return (
            <ol>
                {Object.entries(proficiency).map(([skill, level]) => (
                    <li key={skill}>{`${skill}: ${level}`}</li>
                ))}
            </ol>
        );
    }
}

export default SkillsList;