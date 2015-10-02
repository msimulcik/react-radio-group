import React, {PropTypes} from 'react';

function radio(name, selectedValue, onChange) {
  return React.createClass({
    render: function() {
      return (
        <input
          {...this.props}
          type="radio"
          name={name}
          checked={this.props.value === selectedValue}
          onChange={onChange.bind(null, this.props.value)} />
      );
    }
  });
}

export default React.createClass({
  propTypes: {
    name: PropTypes.string,
    selectedValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    onChange: PropTypes.func,
    children: PropTypes.func.isRequired,
    radioFactory: PropTypes.func,
  },

  render: function() {
    const {name, selectedValue, onChange, children, radioFactory} = this.props;

    const finalRadioFactory = radioFactory || radio;

    const renderedChildren = children(finalRadioFactory(name, selectedValue, onChange));
    return renderedChildren && React.Children.only(renderedChildren);
  }
});
