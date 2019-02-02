import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import './hotelDetailsModal.css'
const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: true,
    hotelData:this.props.hotelData
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>

      <Dialog
        fullScreen
        open={this.state.open}
        onClose={this.handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>

            <Typography variant="h6" color="inherit" className={classes.flex}>
            {this.state.hotelData.name}
            </Typography>
            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
            <CloseIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
            <div className="hotel-details-div"><img className="image" src={this.state.hotelData.featured_image} alt=""></img>
          </div>
            <div className="hotel-details"><p className="para"><strong>RATINGS:  </strong>{this.state.hotelData.user_rating.aggregate_rating}</p>
            <p className="para"><strong>LOCATION:  </strong>{this.state.hotelData.location.address}</p>
            <p className="para"><strong>ID:  </strong>{this.state.hotelData.id}</p>
            <p className="para"><strong>cuisines:  </strong>{this.state.hotelData.cuisines}</p></div>
      </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (FullScreenDialog);
