class StopsController < ApplicationController
  before_action :set_stop, only: %i[show update destroy]
  before_action :set_trip, only: %i[index create show update destroy]

  def index
    render json: @trip.stops, status: :ok
  end

  def show
    render json: @stop, status: :ok
  end

  def create
    @stop = @trip.stops.create(stop_params)
    render json: @trip.stops, status: :ok if @stop
  end

  def update
    @stop.update(stop_params)
    render json: @stop, status: :ok
  end

  def destroy
    render json: @trip.stops, status: :ok if @stop.destroy()
  end

  private

  def set_stop
    stop = params[:id] || params[:stop_id]
    @stop = Stop.find(stop)
  end

  def set_trip
    @trip = Trip.find(params[:trip_id])
  end

  def stop_params
    params.require(:stop).permit(:stop_reason, :note,
                                  cost_attributes: %i[amount])
  end
end
