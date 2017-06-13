const React = require('react')
const PropTypes = require('prop-types')

function FileList(props) {
  return (
    <ul>
      {props.files.map(function (file, index) {
        return (
          <li key={file._id}>
            <ul>
              <li>{file._id}</li>
              <li>{file.filename}</li>
              <li>{file.metadata.fileType}</li>
              <li>{file.metadata.oui}</li>
              <li>{file.metadata.productClass}</li>
              <li>{file.metadata.version}</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}
module.exports = FileList

FileList.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      filename: PropTypes.string.isRequired,
      metadata: PropTypes.shape({
        fileType: PropTypes.string.isRequired,
        oui: PropTypes.string.isRequired,
        productClass: PropTypes.string.isRequired,
        version: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
}
