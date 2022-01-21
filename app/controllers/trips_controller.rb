class TripsController < ApplicationController
  before_action :set_trip, only: %i[show update destroy]

  def index
    current_user = User.find(session[:user_id])
    @trips = current_user.trips
    render json: @trips, status: :ok
  end

  def show
    render json: @trip, status: :ok
  end

  def create
    @trip = Trip.create(trip_params)
    render json: @trip, status: :ok if @trip
  end

  def update
    @trip.update(trip_params)
    render json: @trip, status: :ok
  end

  def destroy
    render json: @trip.destroy(), status: :ok
  end

  private

  def set_trip
    current_user = User.find(session[:user_id])
    
    trip_id = params[:id] || params[:trip_id]
    @trip = current_user.trips.find(trip_id)
  end

  def trip_params
    params.require(:trip).permit(:from, :to, :depart_date, :budget, :user_id)
  end
end
