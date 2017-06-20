const React = require('react')
const PropTypes = require('prop-types')

function FileList(props) {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>OUI</th>
        <th>Model</th>
        <th>Version</th>
      </tr>
      {props.files.map(file =>
        (
          <tr key={file._id}>
            <td>{file.filename}</td>
            <td>{file.metadata.fileType}</td>
            <td>{file.metadata.oui}</td>
            <td>{file.metadata.productClass}</td>
            <td>{file.metadata.version}</td>
          </tr>
        ),
      )}
    </table>
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
